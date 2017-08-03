import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Créditos</h2>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="credit_entity" className="form-control"/>
            <label htmlFor="credit_entity">Institución</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="credit_used_quota" className="form-control"/>
            <label htmlFor="credit_used_quota">Cupo utilizado</label>
          </div>
          <div className="column col-large">
            <input type="text" id="credit_line_amount" className="form-control"/>
            <label htmlFor="credit_line_amount">Cupo línea</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="credit_monthly_payment" className="form-control"/>
            <label htmlFor="credit_monthly_payment">Pago mensual</label>
          </div>
          <div className="column col-large">
            <input type="text" id="credit_expire_dt" className="form-control"/>
            <label htmlFor="credit_expire_dt">Vencimiento</label>
          </div>
          <div className="column col-large">
            <input type="text" id="credit_currency" className="form-control"/>
            <label htmlFor="credit_currency">Moneda</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="credit_card_type" className="form-control"/>
            <label htmlFor="credit_card_type">Tipo tarjeta</label>
          </div>
          <div className="column col-large">
            <input type="text" id="credit_payments_done" className="form-control"/>
            <label htmlFor="credit_payments_done">Cuotas pagadas</label>
          </div>
        </div>

      </form>

      <article role="button">
        <span>Agregar Crédito</span>
        <span className="icon">+</span>
      </article>

    </article>)

  }

}
