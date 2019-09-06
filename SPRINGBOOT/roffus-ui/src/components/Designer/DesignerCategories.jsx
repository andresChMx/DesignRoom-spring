import React from 'react';
import {connect} from "react-redux";
import {LISTAR_CATEGORIAS, LISTAR_SUBCATEGORIAS_POR_CATEGORIA, LISTAR_MUEBLES_POR_SUBCATEGORIA} from '../../actions/actionTypes';
import {fetchListaCategorias,
        fetchListaSubcategoriasXcategoria,
        fetchListaMueblesXsubcategoria} from '../../actions/designerActions';
class DesignerCategories extends React.Component {
    constructor(props){
        super(props);
        window.categoriesComp=this;
        this.state={
            categorias:[
                {codCategoria:"1",nombreCategoria:"sofas"},
                {codCategoria:"2",nombreCategoria:"sillas"},
                {codCategoria:"3",nombreCategoria:"roperos"},
                {codCategoria:"4",nombreCategoria:"camas"},
                {codCategoria:"5",nombreCategoria:"mesas"},
                {codCategoria:"6",nombreCategoria:"armarios"}],
            subcategorias:[
              {"codSubCategoria":1,"categoria":{"codCategoria":1,"nombreCategoria":"Dormitorio"},"nombreSubCategoria":"Ropero"},
            ],
            muebles:[
              {"codMueble":1,"nombreMueble":"Armario para ropa 2 puertas\nRimax","alto":181.5,"ancho":65.0,"largo":58.4,"descripcion":"Ropero de madera color Wengue","imagen":"https://sodimac.scene7.com/is/image/SodimacPeru/1701126?$lista175$","icono":"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/99/99f4eb85906201da92e801e264268bc086de938e_01.top.png","subcategoria":{"codSubCategoria":1,"categoria":{"codCategoria":1,"nombreCategoria":"Dormitorio"},"nombreSubCategoria":"Ropero"},"tiendaVirtual":{"codTienda":1,"nombreTienda":"https://www.maestro.com.pe/","link":"Maestro"}},
                {codMueble:'2',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/47/4735f4de0760791000e3b04ae1c72572e156e16d_00.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/47/4735f4de0760791000e3b04ae1c72572e156e16d_00.top.png"},
                {codMueble:'3',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/7f/7f6271463f22a90de08a8077f335cb43e480bc76_00.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/7f/7f6271463f22a90de08a8077f335cb43e480bc76_00.top.png"},
                {codMueble:'4',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/c2/c29c2d618a7eefc38f5730dedf2238bba965754d_00.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/c2/c29c2d618a7eefc38f5730dedf2238bba965754d_00.top.png"},
                {codMueble:'5',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/c7/c7e2476d881bb878db388387d85d5dedbeb34814_02.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/c7/c7e2476d881bb878db388387d85d5dedbeb34814_02.top.png"},
                {codMueble:'6',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/34/344d4154f2c6e70fd9fe8509def931dfb6632fb6_01.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/34/344d4154f2c6e70fd9fe8509def931dfb6632fb6_01.top.png"},
                {codMueble:'7',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/42/42c75813f9623a56d36eeb62602caa7ada428e11_01.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/42/42c75813f9623a56d36eeb62602caa7ada428e11_01.top.png"},
                {codMueble:'8',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/28/286563d64b1e67728863b1c5c4b4304ab6baa867_01.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/28/286563d64b1e67728863b1c5c4b4304ab6baa867_01.top.png"},
                {codMueble:'6',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/35/3544c1f34516faad0d0580671631f6dd40e78093_01.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/35/3544c1f34516faad0d0580671631f6dd40e78093_01.top.png"},
                {codMueble:'7',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/30/3092b9140c27dfec18d903d5555b1e4c31163e19_01.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/30/3092b9140c27dfec18d903d5555b1e4c31163e19_01.top.png"},
                {codMueble:'8',nombreMueble:'ropero de roble',alto:2,ancho:1.1,largo:3,codTienda:1,codCategoria:3,codSubcategoria:1,descripcion:"mueble muy resistente a radiacion",icono:"https://d1g6u5sj133j06.cloudfront.net/cdb/scaled/renders/99/996dd7739929329c376719477bb0cda42025901d_01.perspective.png_w110h110.png",imagen:"https://d1g6u5sj133j06.cloudfront.net/cdb/renders/99/996dd7739929329c376719477bb0cda42025901d_01.top.png"}
            ],
            //aux
            furnitureClicked:false,
            furnitureClickedIndex:0,

            mueblesEnProyecto:[] //elemento en store (quitarse de aqui)
            //Model
        }

    }
    componentDidMount(){
      this.props.fetchListaCategorias();
      
    };
    componentWillReceiveProps(nextProps){
      if(nextProps.actionType===LISTAR_CATEGORIAS){
        console.log(nextProps.respuesta);
        this.setState({categorias:nextProps.respuesta});
      }
      else if(nextProps.actionType===LISTAR_SUBCATEGORIAS_POR_CATEGORIA){
        console.log(nextProps.respuesta);
        this.setState({subcategorias:nextProps.respuesta});
      }else if(nextProps.actionType==LISTAR_MUEBLES_POR_SUBCATEGORIA){
        this.setState({muebles:nextProps.respuesta});
      }
    }
    categoryClicked(index,e){
      /*CALL ACTION*/this.props.fetchListaSubcategoriasXcategoria(this.state.categorias[index].codCategoria);
        window.categoryClicked(e);
      };
    subcategoryClicked(index,e){
      /*CALL aCTION*/this.props.fetchListaMueblesXsubcategoria(this.state.subcategorias[index].codSubCategoria);
        window.subcategoryClicked(e);
    };
  
      furnitureMouseDown(index,e){
        this.furnitureClicked=true;
        this.furnitureClickedIndex=index;
      };
      furnitureMouseUp(index,e){
        this.furnitureClicked=false;
        if(this.furnitureClickedIndex===index){
          this.addFurniture(index,false);
          console.log("mueble agregado por mouseup");
        }
      };
      furnitureMouseOut(index,e){
        if(this.furnitureClicked){
          this.furnitureClicked=false;
          this.addFurniture(this.furnitureClickedIndex,true);
          console.log("mueble agregado por mouseout");
        }
      };
      addFurniture(index,seguir){
          //this.state.mueblesEnProyecto.push(this.state.muebles[index]);
          window.addFurniture(this.state.muebles[index],seguir);
      }
    render() {
        return (
            <section className="panel-categories">
            <section className="header clearfix">
              <div className="logo line">
                <h1>ROFFUS</h1>
              </div>
            </section>
            <section className="main">
              <p className="title line"> <i className="fa fa-arrow-left btn-back"> </i><span>Categorias</span></p>
              <div className="container">
                <ul className="list-categories">
                {this.state.categorias.map((categoria,index)=>{return (<li className="item" key={index} onClick={this.categoryClicked.bind(this,index)}>{categoria.nombreCategoria}</li>)})}
                </ul>
                <ul className="list-subcategories">
                {this.state.subcategorias.map((subcategoria,index)=>{
                    return (
                    <li className="item"  key={index} onClick={this.subcategoryClicked.bind(this,index)}>{subcategoria.nombreSubCategoria}</li>
                    )
                })}
                </ul>
                <ul className="list-furnitures clearfix">
                {this.state.muebles.map((mueble,index)=>{
                    return(
                        <li className="item" key={index} onMouseDown={this.furnitureMouseDown.bind(this,index)} onMouseOut={this.furnitureMouseOut.bind(this,index)} onMouseUp={this.furnitureMouseUp.bind(this,index)}><img src={mueble.imagen}/><div className="filtro"></div></li>
                    )})}
                </ul>
              </div>
            </section>
            <div className="btn-toggle"><i className="fa fa-arrow-left fa-lg"></i></div>
          </section>
        );
    }
}
const mapState = state => {
  return {respuesta: state.categoria.respuesta || [],actionType: state.categoria.actionType}
};

const mapDispatch = {
  fetchListaCategorias,
  fetchListaSubcategoriasXcategoria,
  fetchListaMueblesXsubcategoria
};
export default connect(mapState,mapDispatch)(DesignerCategories);