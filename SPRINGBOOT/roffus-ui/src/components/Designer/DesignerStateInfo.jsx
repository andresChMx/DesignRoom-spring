import React from 'react';
class DesignerStateInfo extends React.Component{
    componentDidMount(){
    }
    render(){
        return(
            <section className="panel-stateinfo">
            <div className="container">
              <div className="form-group">
                <label htmlFor="ancho">Ancho:</label>
                <input type="text" name="ancho" id="ancho"/>
              </div>
              <div className="form-group">
                <label htmlFor="largo">Largo:</label>
                <input type="text" name="largo" id="largo"/>
              </div>
              <div className="form-group">
                <label htmlFor="angulo">Rotacion:</label>
                <input type="text" name="angulo" id="angulo"/>
              </div>
            </div>
          </section>
        );
    }
}
export default DesignerStateInfo;