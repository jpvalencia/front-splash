import React from 'react'
import {set, get} from 'lodash';
export default class extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        rut:"",
        name:"",
        last_name:"",
        mother_name:"",
        day_of_birthday:"",
        month_of_birthday:"",
        year_of_birthday:"",
        gender:"",
        nationality:"",
        phone:"",
        email:"",
        degree:"",
        educational_level:"",
        activity:"",
        activity_type:"",
        net_income:"",
        init_activity_day:"",
        init_activity_month:"",
        init_activity_year:"",
        job_init_day:"",
        job_init_month:"",
        job_init_year:"",
        employer_name:"",
        employer_rut:"",
        employer_industry:"",
        employer_address:"",
        employer_city2:"",
        employer_city:"",
        employer_state:"",
        employer_phone:""
      }
  }

  setStateData  = (key, event) => {
    let state = this.state;
    set(state, key, event.target.value)
    this.setState(state);
  }

  render(){

    return (<div>
      <article role="form">
        <form action="" method="post">
          <h2>Conyuge</h2>

          <div className="row">
            <div className="column col-medium">
              <input type="text" id="rut_mate" placeholder="12345678-5" className="form-control" value={this.state.rut} onChange={e => this.setStateData("rut", e)}/>
              <label htmlFor="rut_mate">RUT</label>
            </div>
            <div className="column col-large">
              <input type="text" id="name_mate" className="form-control" value={this.state.name} onChange={e => this.setStateData("name", e)}/>
              <label htmlFor="name_mate">Nombres</label>
            </div>
            <div className="column col-large">
              <input type="text" id="last_name_mate" className="form-control" value={this.state.last_name} onChange={e => this.setStateData("last_name", e)}/>
              <label htmlFor="last_name_mate">Apellido Paterno</label>
            </div>
            <div className="column col-large">
              <input type="text" id="mother_name_mate" className="form-control" value={this.state.mother_name} onChange={e => this.setStateData("mother_name", e)}/>
              <label htmlFor="mother_name_mate">Apellido Materno</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">Fecha de nacimiento</div>
          </div>

          <div className="row">
            <div className="column col-small">
              <input type="text" id="day_mate" placeholder="DD" className="form-control" value={this.state.day_of_birthday} onChange={e => this.setStateData("day_of_birthday", e)}/>
              <label htmlFor="day_mate">Día</label>
            </div>
            <div className="column col-small">
              <input type="text" id="month_mate" placeholder="MM" className="form-control" value={this.state.month_of_birthday} onChange={e => this.setStateData("month_of_birthday", e)}/>
              <label htmlFor="month_mate">Mes</label>
            </div>
            <div className="column col-small">
              <input type="text" id="year_mate" placeholder="AAAA" className="form-control" value={this.state.year_of_birthday} onChange={e => this.setStateData("year_of_birthday", e)}/>
              <label htmlFor="year_mate">Año</label>
            </div>
            <div className="column col-large">
              <select id="gender_mate" role="listbox" className="form-control" onChange={e => this.setStateData("gender", e)}>
                <option value="selecciona">Selecciona</option>
              </select>
              <label htmlFor="gender_mate">Genero</label>
            </div>
            <div className="column col-large">
              <input type="text" id="nationality" className="form-control" value={this.state.nationality} onChange={e => this.setStateData("nationality", e)}/>
              <label htmlFor="nationality">Nacionalidad</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="phone" placeholder="56991234567" className="form-control" value={this.state.phone} onChange={e => this.setStateData("phone", e)}/>
              <label htmlFor="phone">Teléfono</label>
            </div>
            <div className="column col-large">
              <input type="text" className="form-control" id="email" value={this.state.email} onChange={e => this.setStateData("email", e)}/>
              <label htmlFor="email">Correo electrónico</label>
            </div>
            <div className="column col-large">
              <select id="educational_level_mate" role="listbox" className="form-control"  onChange={e => this.setStateData("educational_level", e)}>
                <option value="selecciona">Selecciona</option>
                <option value="Educ media incompleta">Educ media incompleta</option>
                <option value="Educ media completa">Educ media completa</option>
                <option value="Técnico">Técnico</option>
                <option value="Universitaria completa">Universitaria completa</option>
                <option value="Universitaria incompleta">Universitaria incompleta</option>
                <option value="Postgrado">Postgrado</option>
              </select>
              <label htmlFor="educational_level_mate">Nivel educacional</label>
            </div>
            <div className="column col-large">
              <input type="text" className="form-control" id="degree" value={this.state.degree} onChange={e => this.setStateData("degree", e)}/>
              <label htmlFor="degree">Título / Profesión</label>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">
              <select id="activity_mate" role="listbox" className="form-control" value={this.state.activity_type} onChange={e => this.setStateData("activity_type", e)}>
                <option value="selecciona">Selecciona</option>
                <option value="Dependiente">Dependiente</option>
                <option value="Independiente">Independiente</option>
                <option value="Pensionado">Pensionado</option>
                <option value="No trabaja">No trabaja</option>
              </select>
              <label htmlFor="activity_mate">Tipo actividad</label>
            </div>
            <div className="column col-large">
              <input type="text" id="email_mate" className="form-control" value={this.state.activity} onChange={e => this.setStateData("activity", e)}/>
              <label htmlFor="email_mate">Actividad / Cargo</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.state.net_income} onChange={e => this.setStateData("net_income", e)}/>
              <label htmlFor="">Renta líquida</label>
            </div>
          </div>
          <div className="row">
            <div className="column">Fecha de inicio de actividades independientes</div>
          </div>
          <div className="row">
            <div className="column col-small">
              <input type="text" id="indep_day_mate" placeholder="DD" className="form-control" value={this.state.init_activity_day} onChange={e => this.setStateData("init_activity_day", e)}/>
              <label htmlFor="job_day_mate">Día</label>
            </div>
            <div className="column col-small">
              <input type="text" id="indep_month_mate" placeholder="MM" className="form-control" value={this.state.init_activity_month} onChange={e => this.setStateData("init_activity_month", e)}/>
              <label htmlFor="job_month_mate">Mes</label>
            </div>
            <div className="column col-small">
              <input type="text" id="indep_year_mate" placeholder="AAAA" className="form-control" value={this.state.init_activity_year} onChange={e => this.setStateData("init_activity_year", e)}/>
              <label htmlFor="job_year_mate">Año</label>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">Fecha de ingreso al cargo</div>
          </div>

          <div className="row">
            <div className="column col-small">
              <input type="text" id="job_day_mate" placeholder="DD" className="form-control" value={this.props.job_init_day} onChange={e => this.setStateData("job_init_day", e)}/>
              <label htmlFor="job_day_mate">Día</label>
            </div>
            <div className="column col-small">
              <input type="text" id="job_month_mate" placeholder="MM" className="form-control" value={this.state.job_init_month} onChange={e => this.setStateData("job_init_month", e)}/>
              <label htmlFor="job_month_mate">Mes</label>
            </div>
            <div className="column col-small">
              <input type="text" id="job_year_mate" placeholder="AAAA" className="form-control" value={this.props.job_init_year} onChange={e => this.setStateData("job_init_year", e)}/>
              <label htmlFor="job_year_mate">Año</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.state.employer_name} onChange={e => this.setStateData("employer_name", e)}/>
              <label htmlFor="">Empleador</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.state.employer_rut} onChange={e => this.setStateData("employer_rut", e)}/>
              <label htmlFor="">RUT empleador</label>
            </div>
            <div className="column col-large">
              <input type="text" id="industry_mate" className="form-control" value={this.state.employer_industry} onChange={e => this.setStateData("employer_industry", e)}/>
              <label htmlFor="industry_mate">Giro / Actividad de la empresa</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.state.employer_address} onChange={e => this.setStateData("employer_address", e)}/>
              <label htmlFor="">Dirección de la empresa</label>
            </div>
           </div>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.state.employer_city2} onChange={e => this.setStateData("employer_city2", e)}/>
              <label htmlFor="">Comuna</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.state.employer_city} onChange={e => this.setStateData("employer_city", e)}/>
              <label htmlFor="">Ciudad</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.state.employer_state} onChange={e => this.setStateData("employer_state", e)}/>
              <label htmlFor="">Región</label>
            </div>
            <div className="column col-large">
              <input type="text" id="phone" placeholder="56991234567" className="form-control" value={this.state.employer_phone} onChange={e => this.setStateData("employer_phone", e)}/>
              <label htmlFor="phone">Teléfono</label>
            </div>
          </div>
          <div className="row controls">
            <div className="alert ready"><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iusto, enim accusantium. Fugiat omnis tempora est nam autem eius quidem sit cum, quae facere ullam repudiandae sunt magni aspernatur amet.</small></div>
            <button type="submit" className="btn-flat first-level btn-large">Guardar</button>
          </div>
        </form>
      </article>
      </div>)

  }

}
