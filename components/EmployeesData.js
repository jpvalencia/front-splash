import React from 'react'
import {set, get} from 'lodash';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        degree: "",
        employer_name:"",
        employer_id:"",
        employer_address:"",
        industry:"",
        job_title:"",
        job_senority:"",
        job_entry_year:"",
        job_entry_month:"",
        job_entry_day:"",
        job_type:"",
        net_income:"",
        annualized_variable_bonus:"",
        previous_employer:"",
        previous_job_title:"",
        previous_net_income:"",
        chief_name:"",
        chief_job_title:""
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
        <h2>Datos Laborales</h2>

        <div className="row">
          <div className="column col-large">
            <select id="job_type" role="listbox" className="form-control" onChange={e => this.setStateData("job_type", e)}>
              <option value="selecciona">Selecciona</option>
              <option value="Dependiente con contrato fijo">Dependiente con contrato fijo</option>
              <option value="Dependiente con contrato indefinido">Dependiente con contrato indefinido</option>
              <option value="Independiente">Independiente</option>
              <option value="Pensionado">Pensionado</option>
              <option value="Desempleado">Desempleado</option>
            </select>
            <label htmlFor="job_type">Tipo de empleo</label>
          </div>
          <div className="column col-large">
            <input type="text" className="form-control" id="degree" value={this.state.degree} onChange={e => this.setStateData("degree", e)}/>
            <label htmlFor="degree">Jubilación percibida</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="employer_name" className="form-control" value={this.state.employer_name} onChange={e => this.setStateData("employer_name", e)}/>
            <label htmlFor="employer_name">Nombre empleador</label>
          </div>
          <div className="column col-large">
            <input type="text" id="employer_id" className="form-control" value={this.state.employer_id} onChange={e => this.setStateData("employer_id", e)}/>
            <label htmlFor="employer_id">RUT empleador</label>
          </div>
          <div className="column col-large">
            <input type="text" id="employer_address" className="form-control" value={this.state.employer_address} onChange={e => this.setStateData("employer_address", e)}/>
            <label htmlFor="employer_address">Dirección empleador</label>
          </div>
          <div className="column col-large">
            <input type="text" id="industry" className="form-control" value={this.state.industry} onChange={e => this.setStateData("industry", e)}/>
            <label htmlFor="industry">Giro / Actividad</label>
          </div>
          <div className="column col-large">
            <input type="text" id="job_title" className="form-control" value={this.state.job_title} onChange={e => this.setStateData("job_title", e)}/>
            <label htmlFor="job_title">Cargo</label>
          </div>
          <div className="column col-large">
            <input type="text" id="job_senority" className="form-control" value={this.state.job_senority} onChange={e => this.setStateData("job_senority", e)}/>
            <label htmlFor="job_senority">Antiguedad laboral</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">Fecha de ingreso a la empresa</div>
        </div>
        <div className="row">
          <div className="column col-small">
            <input type="text" id="job_day" placeholder="DD" className="form-control" value={this.state.job_entry_day} onChange={e => this.setStateData("job_entry_day", e)}/>
            <label htmlFor="job_day">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="job_month" placeholder="MM" className="form-control" value={this.state.job_entry_month} onChange={e => this.setStateData("job_entry_month", e)}/>
            <label htmlFor="job_month">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="job_year" placeholder="AAAA" className="form-control" value={this.state.job_entry_year} onChange={e => this.setStateData("job_entry_year", e)}/>
            <label htmlFor="job_year">Año</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="net_income" className="form-control" value={this.state.net_income} onChange={e => this.setStateData("net_income", e)}/>
            <label htmlFor="net_income">Renta líquida mensual</label>
          </div>
          <div className="column col-large">
            <input type="text" id="" className="form-control" value={this.state.annualized_variable_bonus} onChange={e => this.setStateData("annualized_variable_bonus", e)}/>
            <label htmlFor="">Bono variable anualizado</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="previous_employer" className="form-control" value={this.state.previous_employer} onChange={e => this.setStateData("previous_employer", e)}/>
            <label htmlFor="previous_employer">Empleador anterior</label>
          </div>
          <div className="column col-large">
            <input type="text" id="previous_job_title" className="form-control" value={this.state.previous_job_title} onChange={e => this.setStateData("previous_job_title", e)}/>
            <label htmlFor="previous_job_title">Cargo anterior</label>
          </div>
          <div className="column col-large">
            <input type="text" id="chief_name" className="form-control" value={this.state.chief_name} onChange={e => this.setStateData("chief_name", e)}/>
            <label htmlFor="chief_name">Nombre jefe directo</label>
          </div>
          <div className="column col-large">
            <input type="text" id="chief_job_title" className="form-control" value={this.state.chief_job_title} onChange={e => this.setStateData("chief_job_title", e)}/>
            <label htmlFor="chief_job_title">Cargo jefe directo</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="previous_net_income" className="form-control" value={this.state.previous_net_income} onChange={e => this.setStateData("previous_net_income", e)}/>
            <label htmlFor="previous_net_income">Renta líquida anterior</label>
          </div>
        </div>
        <div className="row controls">
          <div className="alert pending"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iusto, enim accusantium. Fugiat omnis tempora est nam autem eius quidem sit cum, quae facere ullam repudiandae sunt magni aspernatur amet.</small></div>
          <button type="submit" className="btn-flat first-level btn-large">Guardar</button>
        </div>
      </form>
    </article>)

  }

}
