import React from 'react';
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
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
  render(){

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Inversiones</h2>
          <div className="row">
            <table cellPadding="0" cellSpacing="0" className="responsive-table">
              <thead>
                <tr>
                  <th scope="col">Tipo de inversión</th>
                  <th scope="col">Institución</th>
                  <th scope="col">Prenda</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Lorem Ipsum</td>
                  <td data-title="Institución" data-type="">Lorem Ipsum</td>
                  <td data-title="Prenda" data-type="">Lorem Ipsum</td>
                  <td data-title="Valor" data-type="">000000000000</td>
                  <td data-title="Editar" data-type=""><a href="#"><div className="edit"></div></a></td>
                  <td data-title="Eliminar" data-type=""><a href="#"><div className="delete"></div></a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="custom-show-hide">
            <Collapsible trigger="Agregar Vehiculo">
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
                  <button type="submit" className="btn-flat first-level btn-large">Guardar</button>
                </div>
              </div>
            </Collapsible>
          </div>
        </form>
      </article>)

  }

}
