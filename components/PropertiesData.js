import React from 'react';
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      type:"",
      value:"",
      fiscal_value:"",
      perc_ownership:"",
      surface_sqt:"",
      address:"",
      city_2:"",
      mortgagor:"",
      insurance_flg:"",
      last_payment_day:"",
      last_payment_month:"",
      last_payment_year:"",
      fee_paid:"",
      debt_balance:"",
      fee_totals:"",
      fee_monthly_payment:"",
      rental_income:""
    }
  }

  setStateData  = (key, event) => {
    let state = this.state;
    set(state, key, event.target.value)
    this.setState(state);
  }

  render(){

    return (<article role="form">
      <form action="" method="post">
        <h2>Propiedades</h2>
        <div className="row">
          <table cellPadding="0" cellSpacing="0" className="responsive-table">
            <thead>
              <tr>
                <th scope="col">Calle</th>
                <th scope="col">Número</th>
                <th scope="col">Número de Rol</th>
                <th scope="col">Tipo de propiedad</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Lorem Ipsum</td>
                <td data-title="Número" data-type="">0000</td>
                <td data-title="Número de Rol" data-type="">000-00</td>
                <td data-title="Tipo propiedad" data-type="">Departamento</td>
                <td data-title="Editar" data-type=""><a href="#"><div className="edit"></div></a></td>
                <td data-title="Eliminar" data-type=""><a href="#"><div className="delete"></div></a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="custom-show-hide">
          <Collapsible trigger="Agregar Proiedad">
             <div className="collapse">
               <div className="row">
                 <div className="column col-large">
                   <select id="home_ownership" role="listbox" className="form-control">
                     <option value="selecciona">Selecciona</option>
                   </select>
                   <label htmlFor="home_ownership">Tipo de vivienda</label>
                 </div>
                 <div className="column col-large">
                   <input type="text" id="home_ownership" className="form-control"/>
                   <label htmlFor="home_ownership">Costo mensual</label>
                 </div>
               </div>
               <div className="row">
                 <div className="column col-large">
                   <input type="text" id="street_name" className="form-control"/>
                   <label htmlFor="street_name">Calle</label>
                 </div>
                 <div className="column col-small">
                   <input type="text" id="street_number" className="form-control"/>
                   <label htmlFor="street_number">Número</label>
                 </div>
                 <div className="column col-small">
                   <input type="text" id="home_number" className="form-control"/>
                   <label htmlFor="home_number">Depto</label>
                 </div>
                 <div className="column col-large">
                   <input type="text" id="city_2" className="form-control"/>
                   <label htmlFor="city_2">Comuna</label>
                 </div>
                 <div className="column col-large">
                   <input type="text" id="city" className="form-control"/>
                   <label htmlFor="city">Ciudad</label>
                 </div>
                 <div className="column col-large">
                   <input type="text" id="state" className="form-control"/>
                   <label htmlFor="state">Región</label>
                 </div>
                 <div className="column col-large">
                   <input type="text" id="country" className="form-control"/>
                   <label htmlFor="country">País</label>
                 </div>
               </div>
               <br/>
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="property_id" placeholder="000-00" className="form-control" value={this.props.id} onChange={e => this.setStateData("id", e)}/>
                  <label htmlFor="property_id">Número de Rol</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="property_type" className="form-control" value={this.state.type} onChange={e => this.setStateData("type", e)}/>
                  <label htmlFor="property_type">Tipo de propiedad</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="property_value" className="form-control" value={this.state.value} onChange={e => this.setStateData("value", e)}/>
                  <label htmlFor="property_value">Valor de la propiedad</label>
                </div>
              </div>
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="property_fiscal_value" className="form-control" value={this.state.fiscal_value} onChange={e => this.setStateData("fiscal_value", e)}/>
                  <label htmlFor="property_fiscal_value">Avalúo fiscal</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="property_perc_ownership" className="form-control" value={this.state.perc_ownership} onChange={e => this.setStateData("perc_ownership", e)}/>
                  <label htmlFor="property_perc_ownership">Porcentaje de propiedad</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="property_surface_sqt" className="form-control" value={this.state.surface_sqt} onChange={e => this.setStateData("surface_sqt", e)}/>
                  <label htmlFor="property_surface_sqt">Superficie</label>
                </div>
              </div>
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="property_address" className="form-control" value={this.state.address} onChange={e => this.setStateData("address", e)}/>
                  <label htmlFor="property_address">Dirección</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="property_city_2" className="form-control" value={this.state.city_2} onChange={e => this.setStateData("city_2", e)}/>
                  <label htmlFor="property_city_2">Comuna</label>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="property_mortgagor" className="form-control" value={this.state.mortgagor} onChange={e => this.setStateData("mortgagor", e)}/>
                  <label htmlFor="property_mortgagor">Hipoteca a favor de</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="property_insurance_flg" className="form-control" value={this.state.insurance_flg} onChange={e => this.setStateData("insurance_flg", e)}/>
                  <label htmlFor="property_insurance_flg">Seguro</label>
                </div>
              </div>
              <div className="row">
                <div className="column col-large">Fecha de último dividendo</div>
              </div>
              <div className="row">
                <div className="column col-small">
                  <input type="text" id="property_last_payment_day" placeholder="DD" className="form-control" value={this.state.last_payment_day} onChange={e => this.setStateData("last_payment_day", e)}/>
                  <label htmlFor="property_last_payment_day">Día</label>
                </div>
                <div className="column col-small">
                  <input type="text" id="property_last_payment_month" placeholder="MM" className="form-control" value={this.state.last_payment_month} onChange={e => this.setStateData("last_payment_month", e)}/>
                  <label htmlFor="property_last_payment_month">Mes</label>
                </div>
                <div className="column col-small">
                  <input type="text" id="property_last_payment_year" placeholder="AAAA" className="form-control" value={this.state.last_payment_year} onChange={e => this.setStateData("last_payment_year", e)}/>
                  <label htmlFor="property_last_payment_year">Año</label>
                </div>
                <div className="column col-medium">
                  <input type="text" id="" className="form-control col-small" value={this.state.fee_paid} onChange={e => this.setStateData("fee_paid", e)}/>
                  <label htmlFor="">Cuotas pagadas</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="" className="form-control" value={this.state.debt_balance} onChange={e => this.setStateData("debt_balance", e)}/>
                  <label htmlFor="">Saldo deuda</label>
                </div>
                <div className="column col-medium">
                  <input type="text" id="" className="form-control col-small" value={this.state.fee_totals} onChange={e => this.setStateData("fee_totals", e)}/>
                  <label htmlFor="">Cuotas totales</label>
                </div>
              </div>
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="" className="form-control" value={this.state.fee_monthly_payment} onChange={e => this.setStateData("fee_monthly_payment", e)}/>
                  <label htmlFor="">Pago mensual</label>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="property_rental_income" className="form-control" value={this.state.rental_income} onChange={e => this.setStateData("rental_income", e)}/>
                  <label htmlFor="property_rental_income">Arriendo obtenido</label>
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
