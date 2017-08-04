import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="form">
      <form action="" method="post">
        <h2>Datos Laborales</h2>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="employer_name" className="form-control" value={this.props.employer_name} onChange={this.props.onChangeEmployerName}/>
            <label htmlFor="employer_name">Nombre empleador</label>
          </div>
          <div className="column col-large">
            <input type="text" id="employer_id" className="form-control" value={this.props.employer_id} onChange={this.props.onChangeEmployerId}/>
            <label htmlFor="employer_id">RUT empleador</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="employer_address" className="form-control" value={this.props.employer_address} onChange={this.props.onChangeEmployerAddress}/>
            <label htmlFor="employer_address">Dirección empleador</label>
          </div>
          <div className="column col-large">
            <input type="text" id="industry" className="form-control" value={this.props.industry} onChange={this.props.onChangeIndustry}/>
            <label htmlFor="industry">Giro / Actividad</label>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="job_title" className="form-control" value={this.props.job_title} onChange={this.props.onChangeJobTitle}/>
            <label htmlFor="job_title">Cargo</label>
          </div>
          <div className="column col-large">
            <input type="text" id="job_senority" className="form-control" value={this.props.job_senority} onChange={this.props.onChangeJobSenority}/>
            <label htmlFor="job_senority">Antiguedad laboral</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">Fecha de ingreso a la empresa</div>
        </div>
        <div className="row">
          <div className="column col-small">
            <input type="text" id="job_day" placeholder="DD" className="form-control" value={this.props.job_entry_day} onChange={this.props.onChangeJobEntryDay}/>
            <label htmlFor="job_day">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="job_month" placeholder="MM" className="form-control" value={this.props.job_entry_month} onChange={this.props.onChangeJobEntryMonth}/>
            <label htmlFor="job_month">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="job_year" placeholder="AAAA" className="form-control" value={this.props.job_entry_year} onChange={this.props.onChangeJobEntryYear}/>
            <label htmlFor="job_year">Año</label>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="net_income" className="form-control" value={this.props.net_income} onChange={this.props.onChangeNetIncome}/>
            <label htmlFor="net_income">Renta líquida mensual</label>
          </div>
          <div className="column col-large">
            <input type="text" id="" className="form-control" value={this.props.annualized_variable_bonus} onChange={this.props.onChangeAnnualizedVariableBonus}/>
            <label htmlFor="">Bono variable anualizado</label>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="previous_employer" className="form-control" value={this.props.previous_employer} onChange={this.props.onChangePreviousEmployer}/>
            <label htmlFor="previous_employer">Empleador anterior</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="previous_job_title" className="form-control" value={this.props.previous_job_title} onChange={this.props.onChangePreviousJobTitle}/>
            <label htmlFor="previous_job_title">Cargo anterior</label>
          </div>
          <div className="column col-large">
            <input type="text" id="chief_name" className="form-control" value={this.props.chief_name} onChange={this.props.onChangeChiefName}/>
            <label htmlFor="chief_name">Nombre jefe directo</label>
          </div>
          <div className="column col-large">
            <input type="text" id="chief_job_title" className="form-control" value={this.props.chief_job_title} onChange={this.props.onChangeChiefJobTitle}/>
            <label htmlFor="chief_job_title">Cargo jefe directo</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="previous_net_income" className="form-control" value={this.props.previous_net_income} onChange={this.props.onChangePreviousNetIncome}/>
            <label htmlFor="previous_net_income">Renta líquida anterior</label>
          </div>
        </div>
      </form>
    </article>)

  }

}
