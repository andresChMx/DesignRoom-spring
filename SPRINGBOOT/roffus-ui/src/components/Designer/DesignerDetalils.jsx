import React from 'react';
class DesignerDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }

    }
    componentDidMount(){
        //this.setState({localSelected:this.state.plantillas[0]});
        
    }
    componentWillReceiveProps(nextProps){
        
    }
    onChangeInputHandler(event){
        
    }

    btnClose(){
        
    };
    render(){
        return(
            <section className="panel-detalles dark-filter">
                <div className="container">
                    <section className="header clearfix">
                        <p className="title">NOMBRE DEL PRODUCTO</p>
                        <div className="btn-close" onClick={this.btnClose.bind(this)}><i className="fa fa-close fa-lg"></i></div>
                    </section>
                    <section className="main clearfix">
                        <div className="panel-detalles__main__imagen">
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-02-28-at-4-40-48-pm-1582926067.png"></img>
                        </div>        
                        <div className="panel-detalles__main__informacion">
                            <p className="panel-detalles__main__informacion__titulo">Descripcion del producto</p>
                            <p className="panel-detalles__main__informacion__descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis lectus mauris, id faucibus nibh egestas at. Nullam semper nisl at tempus aliquet. Sed fermentum vulputate libero, vel convallis sapien bibendum eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non ullamcorper dolor. Pellentesque pharetra diam leo, eu auctor velit finibus malesuada. Sed diam sapien, malesuada eget tempus nec, mollis vel diam. Proin suscipit mauris nisl. Morbi hendrerit fringilla finibus. Cras vel odio sed nisi hendrerit gravida. Nulla metus ipsum, vestibulum eu dictum vitae, lacinia vitae u</p>
                            <p className="panel-detalles__main__informacion__titulo">Dimensiones</p>
                            <div className="panel-detalles__main__informacion__dimensiones">
                                <span className="panel-detalles__main__informacion__sizes">Ancho: </span>
                                <span className="panel-detalles__main__informacion__sizes">Ancho: </span>
                                <span className="panel-detalles__main__informacion__sizes">Ancho: </span>
                            </div>
                            <div className="panel-detalles__main__informacion__footer">
                                <span className="precio">s/ 240.90</span>
                                <a className="btn-visitar" target="_blank">VISITAR TIENDA</a>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
}
export default DesignerDetails;