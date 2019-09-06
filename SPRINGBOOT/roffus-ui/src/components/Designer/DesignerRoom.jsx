import React from 'react';
class DesignerRoom extends React.Component{
    constructor(props){
        super(props);
        this.state={
            plantillas:[
                {icon:"./dist/img/plantillas/icon01.png",diseno:'[{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:-0.5,y:0.5}]'},
                {icon:"./dist/img/plantillas/icon02.png",diseno:'[{x:-0.25,y:-0.5},{x:0.25,y:-0.5},{x:0.25,y:0.5},{x:-0.25,y:0.5}]'},
                {icon:"./dist/img/plantillas/icon03.png",diseno:'[{x:-0.5,y:-0.5},{x:0,y:-0.5},{x:0,y:0},{x:0.5,y:0},{x:0.5,y:0.5},{x:-0.5,y:0.5}]'},
                {icon:"./dist/img/plantillas/icon04.png",diseno:'[{x:-0.5,y:0},{x:0,y:0},{x:0,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:-0.5,y:0.5}]'},
                {icon:"./dist/img/plantillas/icon05.png",diseno:'[{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0},{x:0,y:0},{x:0,y:0.5},{x:-0.5,y:0.5}]'},
                {icon:"./dist/img/plantillas/icon06.png",diseno:'[{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:0,y:0.5},{x:0,y:0},{x:-0.5,y:0}]'},
                {icon:"./dist/img/plantillas/icon07.png",diseno:'[{x:-0.5,y:-0.5},{x:0.25,y:-0.5},{x:0.5,y:-0.25},{x:0.5,y:0.5},{x:-0.5,y:0.5}]'},
                {icon:"./dist/img/plantillas/icon08.png",diseno:'[{x:-0.25,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:-0.5,y:0.5},{x:-0.5,y:-0.25}]'},
                {icon:"./dist/img/plantillas/icon09.png",diseno:'[{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.25},{x:0.25,y:0.5},{x:-0.5,y:0.5}]'},
                {icon:"./dist/img/plantillas/icon10.png",diseno:'[{x:-0.5,y:-0.5},{x:0.5,y:-0.5},{x:0.5,y:0.5},{x:-0.25,y:0.5},{x:-0.5,y:0.25}]'}
    
            ],
            localSelected:null,

          //Model
          dummyAncho:0,
          dummyLargo:0,
          dummyAlto:0,
            //plantilla
        }

    }
    componentDidMount(){
        this.setState({localSelected:this.state.plantillas[0]});
        
    }
    componentWillReceiveProps(nextProps){
        this.setState({dummyAncho:nextProps.globalPlantilla.ancho,dummyLargo:nextProps.globalPlantilla.largo,dummyAlto:nextProps.globalPlantilla.alto});
    }
    onChangeInputHandler(event){
        
    }
    btnSetSelected(index,event){
        this.setState({localSelected:this.state.plantillas[index]});
        let parentChildren=event.target.parentNode.parentNode.children
        for(var i=0;i<parentChildren.length;i++){
            parentChildren[i].classList.remove("room-selected");
        }
        event.target.parentNode.classList.add("room-selected");
    };
    btnAcceptPlantilla(){
            //this.props.setGlobalPlantilla({"ancho":parseInt(this.state.dummyAncho),"largo":parseInt(this.state.dummyLargo),"alto":parseInt(this.state.dummyAlto),"diseno":this.state.localSelected.diseno});
          this.props.cambiarPlantilla(parseInt(this.state.dummyAncho),parseInt(this.state.dummyLargo),parseInt(this.state.dummyAlto),this.state.localSelected.diseno);
            //this.$emit('btnAcceptClicked',{ancho:this.plantillaAncho,largo:this.plantillaLargo,alto:this.plantillaAlto});
          let newJson = this.state.localSelected.diseno.replace(/([a-zA-Z0-9]+?):/g, '"$1":');        
          window.addRoom(JSON.parse(newJson),this.state.dummyAncho,this.state.dummyLargo);
        
    };
    btnClose(){
        this.setState({dummyAncho:this.props.globalPlantilla.ancho,dummyLargo:this.props.globalPlantilla.largo,dummyAlto:this.props.globalPlantilla.alto});
    };
    render(){
        return(
            <section className="panel-room dark-filter">
            <div className="container">
                <section className="header clearfix">
                    <p className="title">Elige una forma de habitacion</p>
                    <div className="btn-close" onClick={this.btnClose.bind(this)}><i className="fa fa-close fa-lg"></i></div>
                </section>
                <section className="main clearfix">
                    {this.state.plantillas.map((plantilla,index)=>{
                        let clase="";
                        if(index===0){clase=" room-selected"};
                        return(
                            <div className={"item-plantilla" + clase} key={index}>
                                <img src={plantilla.icon} alt="plantilla" onClick={this.btnSetSelected.bind(this,index)}></img>                   
                            </div>
                        )
                    })}         
                </section>
                <section className="options clearfix">
                    <div className="form-group">
                        <label htmlFor="">Ancho:</label>
                        <input type="text"  value={this.state.dummyAncho} onChange={(e)=>{this.setState({dummyAncho:e.target.value})}}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Largo:</label>
                        <input type="text" value={this.state.dummyLargo} onChange={(e)=>{this.setState({dummyLargo:e.target.value})}}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Alto:</label>
                        <input type="text" value={this.state.dummyAlto} onChange={(e)=>{this.setState({dummyAlto:e.target.value})}}></input>
                    </div>     
                    <div className="form-group">
                        <button onClick={this.btnAcceptPlantilla.bind(this)} className="btn-close">Aceptar</button>
                    </div>             
                </section>
            </div>
        </section>
        );
    }
}
export default DesignerRoom;