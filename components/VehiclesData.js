import React from 'react'
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      type:"",
      brand:"",
      model:"",
      year:"",
      value:"",
      insurance_flg:"",
      mortgagor_flg:"",
      fee_unpaid:"",
      monthly_payment:""
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
          <h2>Vehículos</h2>
          <div className="row">
            <table cellPadding="0" cellSpacing="0" className="responsive-table">
              <thead>
                <tr>
                  <th scope="col">Patente</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Año</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">AABB11</td>
                  <td data-title="Marca" data-type="">Audi</td>
                  <td data-title="Modelo" data-type="">A50</td>
                  <td data-title="Año" data-type="">2023</td>
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
                    <input type="text" id="vehicle_id" placeholder="AABB11" className="form-control" value={this.props.id} onChange={e => this.setStateData("id", e)}/>
                    <label htmlFor="vehicle_id">Patente</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="vehicle_type" className="form-control" value={this.props.type} onChange={e => this.setStateData("type", e)}/>
                    <label htmlFor="vehicle_type">Tipo de vehículo</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="vehicle_brand" className="form-control" value={this.props.brand} onChange={e => this.setStateData("brand", e)}/>
                    <label htmlFor="vehicle_brand">Marca</label>
                  </div>
                </div>
               <div className="row">
                  <div className="column col-large">
                    <input type="text" id="vehicle_model" className="form-control" value={this.props.model} onChange={e => this.setStateData("model", e)}/>
                    <label htmlFor="vehicle_model">Modelo</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="vehicle_year" className="form-control" value={this.props.year} onChange={e => this.setStateData("year", e)}/>
                    <label htmlFor="vehicle_year">Año</label>
                  </div>
                  <div className="column col-large">
                    <div className="file-upload-wrapper" data-text="Seleccionar archivo">
                      <input name="file-upload-field" type="file" className="file-upload-field" value="" id="vehicle_doc"/>
                    </div>
                    <label htmlFor="vehicle_doc">Padrón</label>
                  </div>
                </div>

                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="vehicle_value" className="form-control" value={this.props.value} onChange={e => this.setStateData("value", e)}/>
                    <label htmlFor="vehicle_value">Valor comercial</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="vehicle_insurance_flg" className="form-control" value={this.props.insurance_flg} onChange={e => this.setStateData("insurance_flg", e)}/>
                    <label htmlFor="vehicle_insurance_flg">Seguro</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="vehicle_mortgagor_flg" className="form-control" value={this.props.mortgagor_flg} onChange={e => this.setStateData("mortgagor_flg", e)}/>
                    <label htmlFor="vehicle_mortgagor_flg">Institución</label>
                  </div>
                </div>
                <br/>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="vehicle_fee_unpaid" className="form-control col-small" value={this.props.fee_unpaid} onChange={e => this.setStateData("fee_unpaid", e)}/>
                    <label htmlFor="">Cuotas por pagar</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="vehicle_monthly_payment" className="form-control" value={this.props.monthly_payment} onChange={e => this.setStateData("monthly_payment", e)}/>
                    <label htmlFor="">Pago mensual</label>
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
