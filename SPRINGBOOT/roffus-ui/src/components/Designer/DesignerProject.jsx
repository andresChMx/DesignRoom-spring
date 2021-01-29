import React from 'react';
import {connect} from "react-redux";
import {fetchListaProyectos,deleteProyectoXid,fetchPlantillaXid,fetchListaMueblesXnombre} from '../../actions/designerActions';
import { LISTAR_PROYECTOS, LISTAR_PLANTILLA_POR_ID ,BORRAR_PROYECTO_POR_ID,LISTAR_LISTAMUEBLES_POR_NOMBRE} from '../../actions/actionTypes';
class DesignerProject extends React.Component{
    constructor(props){
        super(props);
        this.state={
            proyectos: [
                {codPaquete:1,nombrePaquete:"proyecto 1dfdf",plantilla:1,usuario:1,listaMuebles:"l2"},
                {codPaquete:2,nombrePaquete:"proyecto 2",plantilla:1,usuario:1,listaMuebles:"l2"},
                {codPaquete:3,nombrePaquete:"proyecto fas",plantilla:1,usuario:1,listaMuebles:"l2"},
                {codPaquete:4,nombrePaquete:"proyecto df3r3",plantilla:1,usuario:1,listaMuebles:"l2"}
              ],
        
              proyectoActual:{codPaquete:1,nombrePaquete:"proyecto 1dfdf",plantilla:1,usuario:1,listaMuebles:"l2"},

              //===========model
              //proyecto
              proyectoNombre:"",
              //plantilla
              plantilladiseno:"[{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:-0.5,y:0.5}]",
              plantillaAncho:"",
              plantillaLargo:"",
              plantillaAlto:"",

              flag:false
        }
        this.listarProyectos=this.listarProyectos.bind(this);
    }
    componentDidMount(){
        this.listarProyectos();
    };
    listarProyectos(){
        this.props.fetchListaProyectos();
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps.actionType===LISTAR_PROYECTOS){
            console.log(nextProps.respuesta);
            this.setState({proyectos:nextProps.respuesta});

          }else if(nextProps.actionType==BORRAR_PROYECTO_POR_ID){
            this.props.fetchListaProyectos();
          }
          else if(nextProps.actionType===LISTAR_PLANTILLA_POR_ID){
              //proyecto abrierto
              this.props.abrirProyecto(this.state.proyectoActual,nextProps.respuesta);
            var newJson = nextProps.respuesta.diseno.replace(/([a-zA-Z0-9]+?):/g, '"$1":');
            newJson = newJson.replace(/'/g, '"');
            window.addRoom(JSON.parse(newJson),nextProps.respuesta.ancho,nextProps.respuesta.largo);
             window.panelProject.closer_fired();
              //this.props.setGlobalPlantilla({diseno:JSON.parse(newJson)+"",ancho:nextProps.respuesta.ancho,largo:nextProps.respuesta.largo,alto:nextProps.respuesta.alto});
          }else if(nextProps.actionType==LISTAR_LISTAMUEBLES_POR_NOMBRE){
                window.cleanListaMuebles();
                window.loadFurnitures(nextProps.respuesta);
                window.showMessage("Proyecto \""+this.state.proyectoActual.nombrePaquete+"\" abierto");
          }else{

          }
    }
     btnAbrirProyecto(index){

        this.setState({proyectoActual:this.state.proyectos[index]})        
        this.props.fetchPlantillaXid(this.state.proyectos[index].plantilla.codPlantilla);
        this.props.fetchListaMueblesXnombre(this.state.proyectos[index].listaMuebles);
        //this.listarPlantillaXProyecto();
        //this.listarListaMueblesXProyecto();
        //this.listarMueblesXlistaMuebles();
    };
    btnBorrarProyecto(index){
        if(this.state.proyectos[index].codPaquete==this.state.proyectoActual.codPaquete){
            window.showMessage("No permitido : el proyecto esta abierto");
            return;
        }
      /*DELETE*/ this.props.deleteProyectoXid(this.state.proyectos[index].codPaquete);
      /*GET*/ 
    };
    btnCancelar(){
        this.limpiarProyectoForm();
    }
    btnCrearProyecto(){
        if(!this.validateForm()){return;}
        this.setState({flag:true})
        this.limpiarProyectoForm();
        //TRIGGER SET GLOBAL DATES
        this.props.crearNuevoProyecto(this.state.plantillaAncho,this.state.plantillaLargo,this.state.plantillaAlto,this.state.proyectoNombre);
        window.setCameraToCenter();
        window.cleanListaMuebles();
        window.addRoom([{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:-0.5,y:0.5}],parseInt(this.state.plantillaAncho),parseInt(this.state.plantillaLargo));
        window.panelProject.closer_fired();

        window.showMessage("Proyecto \"" + this.state.proyectoNombre + "\" creado");
    };
    //=============================
    //helpers
    //=============================
    validateForm(){
        if(this.state.proyectoNombre==""){
            alert("Ingrese un nombre valido");
            return false;
        }else if(isNaN(this.state.plantillaAncho) || this.state.plantillaAncho=="" || isNaN(this.state.plantillaLargo) || this.state.plantillaLargo=="" || isNaN(this.state.plantillaAlto) || this.state.plantillaAlto==""){
            alert("Ingrese dimenciones validas");
            return false;
        }
        return true;
    }
    limpiarProyectoForm(){
        this.setState({proyectoNombre:"",plantillaAncho:"",plantillaLargo:"",plantillaAlto:""});
    };

    render(){
        return(
            <section className="panel-project dark-filter">
            <div className="container">
                <div style={{opacity:this.props.existeProyecto?1:0.2}} className="btn-close"><i className="fa fa-close fa-lg"></i></div>
                <div className="mask" style={{display:this.props.existeProyecto?'none':'block'}}></div>
                <section className="oldprojects">
                <p className="title">Tus proyectos</p>
                <section className="list-projects">
                    {this.state.proyectos.map((proyecto,index)=>{
                        return (
                            <section className="item" key={index}>
                            <div className="projectItemContainer">
                              <img src="./dist/img/project-icon.png" alt=""></img>
                              <h4 className="title">{proyecto.nombrePaquete}</h4>
                              <div className="buttons">
                                <p className="btn" onClick={this.btnAbrirProyecto.bind(this,index)}>Abrir</p>
                                <p className="btn" onClick={this.btnBorrarProyecto.bind(this,index)}>Borrar</p>
                              </div>
                            </div>
                          </section>
                        );
                    })}
                    <section className="item"></section>
                </section>
                </section>
                <section className="newproject">
                <div className="header">
                    <p className="title">Nuevo Proyecto</p>
                    <p className="description">Crear un proyecto nuevo</p>
                </div>
                <div className="form">
                    <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" value={this.state.proyectoNombre} onChange={(e)=>this.setState({proyectoNombre:e.target.value})}/>
                    </div>
                    <div className="row clearfix">
                    <div className="form-group">
                        <label htmlFor="ancho">Ancho</label>
                        <input type="text" id="ancho" name="ancho" value={this.state.plantillaAncho} onChange={(e)=>this.setState({plantillaAncho:e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="largo">Largo</label>
                        <input type="text" id="largo" name="largo" value={this.state.plantillaLargo} onChange={(e)=>this.setState({plantillaLargo:e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="alto">Alto</label>
                        <input type="text" id="alto" name="alto" value={this.state.plantillaAlto} onChange={(e)=>this.setState({plantillaAlto:e.target.value})}/>
                    </div>
                    </div>
                    <div className="buttons">
                    <button style={{opacity:this.props.existeProyecto?1:0.2}} className="btn btn-close" onClick={this.btnCancelar.bind(this)}>Cancelar</button>
                    <div className="mask" style={{display:this.props.existeProyecto?'none':'block'}}></div>
                    <button className="btn btn-createproject" onClick={this.btnCrearProyecto.bind(this)}>Crear</button>
                    </div>
                </div>
                </section>
            </div>
            </section>
        );
    }
}
const mapStated = state => {
    return {respuesta: state.project.respuesta || [],actionType: state.project.actionType}
  };
  
const mapDispatchd = {
    fetchListaProyectos,
    deleteProyectoXid,
    fetchPlantillaXid,
    fetchListaMueblesXnombre
};
 export default connect(mapStated,mapDispatchd)(DesignerProject);