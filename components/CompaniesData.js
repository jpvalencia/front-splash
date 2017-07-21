import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Sociedades</h2>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="company_name" className="form-control"/>
            <label for="company_name">Nombre sociedad</label>
          </div>
          <div className="column col-large">
            <input type="text" id="company_id" placeholder="12345678-5" className="form-control"/>
            <label for="company_id">RUT</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="company_industry" className="form-control"/>
            <label for="company_industry">Giro</label>
          </div>
          <div className="column col-large">
            <input type="text" id="company_perc_ownership" className="form-control"/>
            <label for="company_perc_ownership">Porcentaje participación</label>
          </div>
          <div className="column col-large">
            <input type="text" id="company_value" className="form-control"/>
            <label for="company_value">Valor inversión</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="company_start_dt" className="form-control"/>
            <label for="company_start_dt">Año inicio</label>
          </div>
          <div className="column col-large">
            <input type="text" id="company_notaria" className="form-control"/>
            <label for="company_notaria">Notaría</label>
          </div>
          <div className="column col-large">
            <input type="text" id="company_net_worth" className="form-control"/>
            <label for="company_net_worth">Patrimonio</label>
          </div>
        </div>

      </form>

      <article role="button">
        <span>Agregar Sociedad</span>
        <span className="icon">+</span>
      </article>

    </article>)

  }

}
