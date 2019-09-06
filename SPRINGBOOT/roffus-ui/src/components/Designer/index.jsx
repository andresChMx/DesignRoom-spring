import React from 'react';
import {connect} from "react-redux";
import DesignerPlane2d from './DesignerPlane2d';
import DesignerHeader from './DesignerHeader';
import DesignerCategories from './DesignerCategories';
import DesignerProject from './DesignerProject';
import DesignerStateInfo from './DesignerStateInfo';
import DesignerRoom from './DesignerRoom';
import Styles from './css/styles.css';
import StylesFont from "./css/font-awesome.css";


import { INSERTAR_PLANTILLA,INSERTAR_LISTAMUEBLES,INSERTAR_PROYECTO,BORRAR_LISTAMUEBLES_POR_NOMBRE } from '../../actions/actionTypes';
import {postPlantilla,postListaMuebles,postProyecto,fetchListaProyectos,deleteListaMueblesXnombre} from '../../actions/designerActions';

class Designer extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            proyectoState:window.DesignerProjectStates.empty,
            proyectoActual:{nombrePaquete:'',plantilla:null,usuario:null,listaMuebles:''},
            plantillaActual:{diseno:'[{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:-0.5,y:0.5}]',alto:0,ancho:0,largo:0},

            existeProyecto:false,
            estadoProyecto:0,
            nombreListaMuebles:'L'+Math.round(Math.random()*5000),
            usuario:{"codUsuario":1,"nombreUsuario":null,"correo":null,"contrasena":null,"foto":null,"fnacimiento":null},
        }
        this.guardarProyecto=this.guardarProyecto.bind(this);
        this.crearNuevoProyecto=this.crearNuevoProyecto.bind(this);
        this.cambiarPlantilla=this.cambiarPlantilla.bind(this);
        this.guardarPaquete=this.guardarPaquete.bind(this);
        this.abrirProyecto=this.abrirProyecto.bind(this);
    };
    componentDidMount(){
        window.initUI();
        window.init();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.actionType===INSERTAR_PLANTILLA){

            console.log(nextProps.respuesta);
            this.setState({plantillaActual:nextProps.respuesta});
            if(this.state.proyectoState==window.DesignerProjectStates.created){
                this.guardarPaquete(nextProps.respuesta);
                window.showMessage("Guardado exitosamente");
            }

            this.setState({proyectoState:window.DesignerProjectStates.saved});
        }else if(nextProps.actionType===INSERTAR_LISTAMUEBLES){
            console.log(nextProps.respuesta);
        }else if(nextProps.actionType===INSERTAR_PROYECTO){
            console.log(nextProps.respuesta);
            this.setState({proyectoActual:nextProps.respuesta});
            this.props.fetchListaProyectos();
        }else if(nextProps.actionType===BORRAR_LISTAMUEBLES_POR_NOMBRE){
            let listaGenerada=window.generateListaMuebles(this.state.nombreListaMuebles);
            console.log(listaGenerada);
            this.props.postListaMuebles(JSON.stringify(listaGenerada));
            window.showMessage("Guardado exitosamente");
        }
    }
    componentWillUnmount(){
        window.desInit();
    };
    guardarPaquete(plantilla){
        //esperó a que se responda la accion INSERTAR PLANTILLA
        this.setState((prevState)=>({
            proyectoActual:{
                
                ...prevState.proyectoActual,
                listaMuebles:this.state.nombreListaMuebles,
                usuario:this.state.usuario,
                plantilla:plantilla
            }
        }),function(){
            this.props.postProyecto(JSON.stringify(this.state.proyectoActual));
        });

    }
    //llamado desde los hijos
    guardarProyecto(){
        if(this.state.proyectoState==window.DesignerProjectStates.created){

            let listaGenerada=window.generateListaMuebles(this.state.nombreListaMuebles);
            console.log(listaGenerada);
            /*POST*/this.props.postPlantilla(JSON.stringify(this.state.plantillaActual));
            /*POST*/this.props.postListaMuebles(JSON.stringify(listaGenerada));

        }else if(this.state.proyectoState==window.DesignerProjectStates.saved){
            this.props.postPlantilla(JSON.stringify(this.state.plantillaActual));
            this.props.deleteListaMueblesXnombre(this.state.nombreListaMuebles);

        }
    }
    crearNuevoProyecto(plantillaAncho,plantillaLargo,plantillaAlto,proyectoNombre){

        this.setState({
            proyectoState:window.DesignerProjectStates.created,
            proyectoActual:{nombrePaquete:proyectoNombre,plantilla:null,usuario:null,listaMuebles:''},
            plantillaActual:{diseno:'[{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:-0.5,y:0.5}]',alto:plantillaAlto,ancho:plantillaAncho,largo:plantillaLargo},
            nombreListaMuebles:'L'+Math.round(Math.random()*5000)
        });
    }
    cambiarPlantilla(plantillaAncho,plantillaLargo,plantillaAlto,diseño){
        this.setState((prevState)=>({
            plantillaActual:{
                ...prevState.plantillaActual,
                ancho:plantillaAncho,
                largo:plantillaLargo,
                alto:plantillaAlto,
                diseno:diseño
            }
        }))
    }
    abrirProyecto(proyecto,plantilla){

        this.setState({proyectoState:window.DesignerProjectStates.saved});
            this.setState({proyectoActual:proyecto});
        
            this.setState({plantillaActual:plantilla});
        
        this.setState({nombreListaMuebles:proyecto.listaMuebles});



    }
    render(){
        return(
            <React.Fragment>
                <DesignerPlane2d/>
                <DesignerHeader guardarProyecto={this.guardarProyecto}/>
                <DesignerCategories/>
                <DesignerStateInfo/>
                <DesignerRoom cambiarPlantilla={this.cambiarPlantilla} globalPlantilla={this.state.plantillaActual}/>
                <DesignerProject crearNuevoProyecto={this.crearNuevoProyecto} abrirProyecto={this.abrirProyecto} globalProyectoActual={this.state.proyectoActual}/>
                <div className="dialoguebox"></div>
            </React.Fragment>
        );
    }
}
const mapState = state => {
    return {respuesta: state.root.respuesta || [],actionType: state.root.actionType}
  };
  
  const mapDispatch = {
    postPlantilla,postListaMuebles,postProyecto,fetchListaProyectos,deleteListaMueblesXnombre
  };
 export default connect(mapState,mapDispatch)(Designer);