import React from 'react';
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
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
  render(){

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Sociedades</h2>
          <div className="row">
            <table cellPadding="0" cellSpacing="0" className="responsive-table">
              <thead>
                <tr>
                  <th scope="col">Nombre sociedad</th>
                  <th scope="col">RUT</th>
                  <th scope="col">Giro</th>
                  <th scope="col">Año inicio</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Lorem Ipsum S.A.</td>
                  <td data-title="RUT" data-type="">12345678-5</td>
                  <td data-title="Giro" data-type="">Lorem Ipsum</td>
                  <td data-title="Año inicio" data-type="">2018</td>
                  <td data-title="Editar" data-type=""><a href="#"><div className="edit"></div></a></td>
                  <td data-title="Eliminar" data-type=""><a href="#"><div className="delete"></div></a></td>
                </tr>
              </tbody>
            </table>
          </div>
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
                  <button type="submit" className="btn-flat first-level btn-large">Guardar</button>
                </div>
              </div>
            </Collapsible>
          </div>
        </form>
      </article>
    )

  }

}
