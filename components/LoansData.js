import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Préstamos</h2>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="loan_entity" className="form-control"/>
            <label for="loan_entity">Institución</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="loan_warranty_type" className="form-control"/>
            <label for="loan_warranty_type">Tipo garantía</label>
          </div>
          <div className="column col-large">
            <input type="text" id="loan_expire_dt" className="form-control"/>
            <label for="loan_expire_dt">Vencimiento</label>
          </div>
          <div className="column col-large">
            <input type="text" id="loan_payments_done" className="form-control"/>
            <label for="loan_payments_done">Cuotas pagadas</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="loan_balance" className="form-control"/>
            <label for="loan_balance">Saldo deuda</label>
          </div>
          <div className="column col-large">
            <input type="text" id="loan_monthly_payment" className="form-control"/>
            <label for="loan_monthly_payment">Pago mensual</label>
          </div>
          <div className="column col-large">
            <input type="text" id="loan_payments_qt" className="form-control"/>
            <label for="loan_payments_qt">Cuotas totales</label>
          </div>
        </div>

      </form>

      <article role="button">
        <span>Agregar Préstamo</span>
        <span className="icon">+</span>
      </article>

    </article>)

  }

}
