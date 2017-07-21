import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Datos Laborales</h2>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="job_title" className="form-control"/>
            <label for="job_title">Cargo</label>
          </div>
          <div className="column col-large">
            <input type="text" id="job_senority" className="form-control"/>
            <label for="job_senority">Antiguedad laboral</label>
          </div>
          <div className="column col-large">
            <input type="text" id="net_income" className="form-control"/>
            <label for="net_income">Renta líquida</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="employer_name" className="form-control"/>
            <label for="employer_name">Nombre empleador</label>
          </div>
          <div className="column col-large">
            <input type="text" id="employer_id" className="form-control"/>
            <label for="employer_id">RUT empleador</label>
          </div>
          <div className="column col-large">
            <input type="text" id="employer_address" className="form-control"/>
            <label for="employer_address">Dirección empleador</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="industry" className="form-control"/>
            <label for="industry">Giro / Actividad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">Fecha de ingreso a la empresa</div>
        </div>

        <div className="row">
          <div className="column col-small">
            <input type="text" id="job_day" placeholder="DD" className="form-control"/>
            <label for="job_day">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="job_month" placeholder="MM" className="form-control"/>
            <label for="job_month">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="job_year" placeholder="AAAA" className="form-control"/>
            <label for="job_year">Año</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="previous_job_title" className="form-control"/>
            <label for="previous_job_title">Cargo anterior</label>
          </div>
          <div className="column col-large">
            <input type="text" id="previous_net_income" className="form-control"/>
            <label for="previous_net_income">Renta líquida anterior</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="previous_employer" className="form-control"/>
            <label for="previous_employer">Empleador anterior</label>
          </div>
          <div className="column col-large">
            <input type="text" id="chief_name" className="form-control"/>
            <label for="chief_name">Nombre jefe directo</label>
          </div>
          <div className="column col-large">
            <input type="text" id="chief_job_title" className="form-control"/>
            <label for="chief_job_title">Cargo jefe directo</label>
          </div>
        </div>

      </form>
    </article>)

  }

}
