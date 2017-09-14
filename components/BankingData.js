import React from 'react';
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      office:"",
      account_number:"",
      loans: {
        warranty_type:"",
        expire_dt:"",
        fees_paid:"",
        monthly_payment:"",
        total_fees:"",
        balance_debt:""
      },
      credits: {
        used_quota:"",
        line_ammount:"",
        monthly_payment:"",
        expire_dt:"",
        currency:"",
        card_type:"",
        payments_done:"",
        line_quota:"",
        used_ammount:""
      }
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
          <h2>Banca</h2>
          <div className="row">
            <table cellPadding="0" cellSpacing="0" className="responsive-table">
              <thead>
                <tr>
                  <th scope="col">Banco / Institución</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Vencimiento</th>
                  <th scope="col">Saldo deuda</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Banco Crédito e Inversiones</td>
                  <td data-title="Producto" data-type="">Crédito de consumo</td>
                  <td data-title="Vencimiento" data-type="">31/11/2019</td>
                  <td data-title="Saldo deuda" data-type="">00.000.000</td>
                  <td data-title="Editar" data-type=""><a href="#"><div className="edit"></div></a></td>
                  <td data-title="Eliminar" data-type=""><a href="#"><div className="delete"></div></a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="custom-show-hide">
            <Collapsible trigger="Agregar Banca">
               <div className="collapse">
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="bank_name" className="form-control" value={this.state.name} onChange={e => this.setStateData("name", e)}/>
                    <label htmlFor="bank_name">Banco / Institución</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="bank_office" className="form-control" value={this.state.office} onChange={e => this.setStateData("office", e)}/>
                    <label htmlFor="bank_office">Sucursal</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="bank_account_number" className="form-control" value={this.state.account_number} onChange={e => this.setStateData("account_number", e)}/>
                    <label htmlFor="bank_account_number">Número de cuenta</label>
                  </div>
                </div>
                <br/>
                <h3>Crédito de Consumo</h3>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="" className="form-control" value={this.state.loans.warranty_type} onChange={e => this.setStateData("loans.warranty_type", e)}/>
                    <label htmlFor="">Tipo garantía</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="" className="form-control" value={this.state.loans.expire_dt} onChange={e => this.setStateData("loans.expire_dt", e)}/>
                    <label htmlFor="">Vencimiento</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="" className="form-control col-small" value={this.state.loans.fees_paid} onChange={e => this.setStateData("loans.fees_paid", e)}/>
                    <label htmlFor="">Cuotas pagadas</label>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="" className="form-control" value={this.state.loans.monthly_payment} onChange={e => this.setStateData("loans.monthly_payment", e)}/>
                    <label htmlFor="">Pago mensual</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="" className="form-control col-small" value={this.state.loans.total_fees} onChange={e => this.setStateData("loans.total_fees", e)}/>
                    <label htmlFor="">Cuotas totales</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="" className="form-control" value={this.state.loans.balance_debt} onChange={e => this.setStateData("loans.balance_debt", e)}/>
                    <label htmlFor="">Saldo deuda</label>
                  </div>
                </div>
                <br/>
                <h3>Tarjeta de Crédito</h3>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="credit_used_quota" className="form-control" value={this.state.credits.used_quota} onChange={e => this.setStateData("credits.used_quota", e)}/>
                    <label htmlFor="credit_used_quota">Cupo utilizado</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="credit_line_amount" className="form-control" value={this.state.credits.line_quota} onChange={e => this.setStateData("credits.line_quota", e)}/>
                    <label htmlFor="credit_line_amount">Cupo línea</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="credit_monthly_payment" className="form-control" value={this.state.credits.monthly_payment} onChange={e => this.setStateData("credits.monthly_payment", e)}/>
                    <label htmlFor="credit_monthly_payment">Pago mensual</label>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="credit_expire_dt" className="form-control" value={this.state.credits.expire_dt} onChange={e => this.setStateData("credits.expire_dt", e)}/>
                    <label htmlFor="credit_expire_dt">Vencimiento</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="credit_currency" className="form-control" value={this.state.credits.currency} onChange={e => this.setStateData("credits.currency", e)}/>
                    <label htmlFor="credit_currency">Moneda</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="credit_card_type" className="form-control" value={this.state.credits.card_type} onChange={e => this.setStateData("credits.card_type", e)}/>
                    <label htmlFor="credit_card_type">Tipo tarjeta</label>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="credit_payments_done" className="form-control" value={this.state.credits.payments_done} onChange={e => this.setStateData("credits.payments_done", e)}/>
                    <label htmlFor="credit_payments_done">Cuotas pagadas</label>
                  </div>
                </div>
                <br/>
                <h3>Línea de Crédito</h3>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="" className="form-control" value={this.state.credits.line_quota} onChange={e => this.setStateData("credits.line_quota", e)}/>
                    <label htmlFor="">Cupo línea de crédito</label>
                  </div>
                  <div className="column col-large">
                    <input type="text" id="" className="form-control" value={this.state.credits.used_ammount} onChange={e => this.setStateData("credits.used_ammount", e)}/>
                    <label htmlFor="">Monto utilizado</label>
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
