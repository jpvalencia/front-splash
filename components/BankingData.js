import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<div>
      <article role="form">
        <form action="" method="post">
          <h2>Banca</h2>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="bank_name" className="form-control" value={this.props.bank_name} onChange={this.props.onChangeBankName}/>
              <label htmlFor="bank_name">Banco / Institución</label>
            </div>
            <div className="column col-large">
              <input type="text" id="bank_office" className="form-control" value={this.props.bank_office} onChange={this.props.onChangeBankOffice}/>
              <label htmlFor="bank_office">Sucursal</label>
            </div>
            <div className="column col-large">
              <input type="text" id="bank_account_number" className="form-control" value={this.props.bank_account_number} onChange={this.props.onChangeBankAccountNumber}/>
              <label htmlFor="bank_account_number">Número de cuenta</label>
            </div>
          </div>
        </form>

        <form action="" method="post">
          <h3>Préstamos</h3>
          <div className="row">
            <div className="column">¿Tienes algún Crédito de Consumo?</div>
          </div>
          <div className="row">
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-22" value=""/>
                <label htmlFor="radio-22">SI</label>
              </div>
            </div>
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-23" value=""/>
                <label htmlFor="radio-23">NO</label>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.loan_warranty_type} onChange={this.props.onChangeLoanWarrantyType}/>
              <label htmlFor="">Tipo garantía</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.loan_expire_dt} onChange={this.props.onChangeLoanExpireDt}/>
              <label htmlFor="">Vencimiento</label>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control col-small" value={this.props.loan_fees_paid} onChange={this.props.onChangeLoanFeesPaid}/>
              <label htmlFor="">Cuotas pagadas</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.loan_monthly_payment} onChange={this.props.onChangeLoanMonthlyPayment}/>
              <label htmlFor="">Pago mensual</label>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control col-small" value={this.props.loan_total_fees} onChange={this.props.onChangeLoanTotalFees}/>
              <label htmlFor="">Cuotas totales</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.loan_balance_debt} onChange={this.props.onChangeLoanBalanceDebt}/>
              <label htmlFor="">Saldo deuda</label>
            </div>
          </div>
        </form>

        <form action="" method="post">
          <h3>Créditos</h3>
          <div className="row">
            <div className="column">¿Tienes Tarjeta de Crédito?</div>
          </div>
          <div className="row">
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-22" value=""/>
                <label htmlFor="radio-22">SI</label>
              </div>
            </div>
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-23" value=""/>
                <label htmlFor="radio-23">NO</label>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="credit_used_quota" className="form-control" value={this.props.credit_used_quota} onChange={this.props.onChangeCreditUsedQuota}/>
              <label htmlFor="credit_used_quota">Cupo utilizado</label>
            </div>
            <div className="column col-large">
              <input type="text" id="credit_line_amount" className="form-control" value={this.props.credit_line_quota} onChange={this.props.onChangeCreditLineQuota}/>
              <label htmlFor="credit_line_amount">Cupo línea</label>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="credit_monthly_payment" className="form-control" value={this.props.credit_monthly_payment} onChange={this.props.onChangeCreditMonthlyPayment}/>
              <label htmlFor="credit_monthly_payment">Pago mensual</label>
            </div>
            <div className="column col-large">
              <input type="text" id="credit_expire_dt" className="form-control" value={this.props.credit_expire_dt} onChange={this.props.onChangeCreditExpireDt}/>
              <label htmlFor="credit_expire_dt">Vencimiento</label>
            </div>
            <div className="column col-large">
              <input type="text" id="credit_currency" className="form-control" value={this.props.credit_currency} onChange={this.props.onChangeCreditCurrency}/>
              <label htmlFor="credit_currency">Moneda</label>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="credit_card_type" className="form-control" value={this.props.credit_card_type} onChange={this.props.onChangeCreditCardType}/>
              <label htmlFor="credit_card_type">Tipo tarjeta</label>
            </div>
            <div className="column col-large">
              <input type="text" id="credit_payments_done" className="form-control" value={this.props.credit_payments_done} onChange={this.props.onChangeCreditPaymentsDone}/>
              <label htmlFor="credit_payments_done">Cuotas pagadas</label>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column">¿Tienes Línea de Crédito?</div>
          </div>
          <div className="row">
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-22" value=""/>
                <label htmlFor="radio-22">SI</label>
              </div>
            </div>
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-23" value=""/>
                <label htmlFor="radio-23">NO</label>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.credit_line_quota} onChange={this.props.onChangeCreditLineQuota}/>
              <label htmlFor="">Cupo línea de crédito</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.credit_used_ammount} onChange={this.props.onChangeCreditUsedAmmount}/>
              <label htmlFor="">Monto utilizado</label>
            </div>
          </div>

        </form>
      </article>

      <article role="button">
        <span>Agregar Banca</span>
        <span className="icon">+</span>
      </article>
      </div>)

  }

}
