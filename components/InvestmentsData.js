import React from 'react';
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
import InvestmentsResume from './InvestmentsResume';
import servicesHelper from './helpers/servicesInvestments';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type:"",
      issuer:"",
      mortgagor_flg:"",
      value:""
    };
  }
  setStateData  = (key, event) => {
    let state = this.state;
    set(state, key, event.target.value)
    this.setState(state);
  }

  update = () => {
    const endpointUpdate = '/customer/information/investments';
    servicesHelper.update(endpointUpdate, this.state)
    .then(()=> {
      this.refs.resume.getResume();
    });
  };

  render(){

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Inversiones</h2>
          <InvestmentsResume ref="resume" />
          <div className="custom-show-hide">
            <Collapsible trigger="Agregar Inversión">
               <div className="collapse">
                <div className="row">
                  <div className="column col-large">
                    <select id="investment_type" role="listbox" className="form-control" onChange={e => this.setStateData("type", e)}>
                      <option value="selecciona">Selecciona</option>
                      <option value="Depositio a plazo">Depositio a plazo</option>
                      <option value="Fondos mutuos">Fondos mutuos</option>
                      <option value="Ahorro">Ahorro</option>
                      <option value="Acciones">Acciones</option>
                      <option value="Otros">Otros</option>
                    </select>
                    <label htmlFor="investment_type">Tipo de inversión</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="investment_issuer" className="form-control" value={this.props.issuer} onChange={e => this.setStateData("issuer", e)}/>
                    <label htmlFor="investment_issuer">Institución emisora</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="investment_mortgagor_flg" className="form-control" value={this.props.mortgagor_flg} onChange={e => this.setStateData("mortgagor_flg", e)}/>
                    <label htmlFor="investment_mortgagor_flg">Prenda</label>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="investment_value" className="form-control" value={this.props.value} onChange={e => this.setStateData("value", e)}/>
                    <label htmlFor="investment_value">Valor comercial</label>
                  </div>
                </div>
                <div className="row controls">
                  <button type="button" className="btn-flat first-level btn-large" onClick={this.update}>Guardar</button>
                </div>
              </div>
            </Collapsible>
          </div>
        </form>
      </article>)

  }

}
