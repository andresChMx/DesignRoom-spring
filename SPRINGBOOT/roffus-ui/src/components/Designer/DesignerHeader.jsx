import React from 'react';
class DesignerHeader extends React.Component{
    constructor(props){
      super(props);
      this.state={

      }
    }
    componentDidMount(){
    };
    btnGuardarProyecto(){
      //axios post proyecto nuevo
      this.props.guardarProyecto();
      //pasos
      //axios post listaMuebles
      //axios post proyecto
    };
    render(){
        return(
            <section className="panel-main clearfix">
            <div className="logo"> 
              <h1>ROFFUS</h1>
            </div>
            <div className="options">
              <div className="btn-session clearfix"><i className="fa fa-user fa-2x"></i>
              </div>
              <ul className="menu">
                <li className="btn-project"><i className="fa fa-file-o fa-lg"></i></li>
                <li className="btn-save" onClick={this.btnGuardarProyecto.bind(this)}><i className="fa fa-save fa-lg"></i></li>
                <li  className="special-icon btn-room"><img src="dist/img/construction.png" alt=""></img></li>
              </ul>
            </div>
          </section>
        );
    }
}
export default DesignerHeader;