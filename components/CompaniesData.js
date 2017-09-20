import React from 'react';
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
import CompaniesResume from './CompaniesResume';
import servicesHelper from './helpers/servicesCompanies';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      id:"",
      industry:"",
      perc_ownership:"",
      value:"",
      start_dt:"",
      notaria:"",
      net_worth:""
    }
  }
  setStateData  = (key, event) => {
    let state = this.state;
    set(state, key, event.target.value)
    this.setState(state);
  }

  update = () => {
    const endpointUpdate = '/customer/information/companies';
    servicesHelper.update(endpointUpdate, this.state)
    .then(()=> {
      this.refs.resume.getResume();
    });
  };

  render(){

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Sociedades</h2>
          <CompaniesResume ref="resume"/>
          <div className="custom-show-hide">
            <Collapsible trigger="Agregar Sociedad">
               <div className="collapse">
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="company_name" className="form-control" value={this.state.name} onChange={e => this.setStateData("name", e)}/>
                    <label htmlFor="company_name">Nombre sociedad</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="company_id" placeholder="12345678-5" className="form-control" value={this.state.id} onChange={e => this.setStateData("id", e)}/>
                    <label htmlFor="company_id">RUT</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="company_industry" className="form-control" value={this.state.industry} onChange={e => this.setStateData("industry", e)}/>
                    <label htmlFor="company_industry">Giro</label>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="company_perc_ownership" className="form-control" value={this.state.perc_ownership} onChange={e => this.setStateData("perc_ownership", e)}/>
                    <label htmlFor="company_perc_ownership">Porcentaje participación</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="company_value" className="form-control" value={this.state.alue} onChange={e => this.setStateData("value", e)}/>
                    <label htmlFor="company_value">Valor inversión</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="company_start_dt" className="form-control" value={this.state.start_dt} onChange={e => this.setStateData("start_dt", e)}/>
                    <label htmlFor="company_start_dt">Año inicio</label>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="company_notaria" className="form-control" value={this.state.notaria} onChange={e => this.setStateData("notaria", e)}/>
                    <label htmlFor="company_notaria">Notaría</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="company_net_worth" className="form-control" value={this.state.net_worth} onChange={e => this.setStateData("net_worth", e)}/>
                    <label htmlFor="company_net_worth">Patrimonio</label>
                  </div>
                </div>
                <div className="row controls">
                  <button type="button" className="btn-flat first-level btn-large" onClick={this.update}>Guardar</button>
                </div>
              </div>
            </Collapsible>
          </div>
        </form>
      </article>
    )

  }

}
