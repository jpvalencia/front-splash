import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<div>
      <article role="form">
        <form action="" method="post">
          <h2>Conyuge</h2>

          <div className="row">
            <div className="column col-medium">
              <input type="text" id="rut_mate" placeholder="12345678-5" className="form-control" value={this.props.spouse_rut} onChange={this.props.onChangeSpouseRut}/>
              <label htmlFor="rut_mate">RUT</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="name_mate" className="form-control" value={this.props.spouse_name} onChange={this.props.onChangeSpouseName}/>
              <label htmlFor="name_mate">Nombres</label>
            </div>
            <div className="column col-large">
              <input type="text" id="last_name_mate" className="form-control" value={this.props.spouse_last_name} onChange={this.props.onChangeSpouseLastName}/>
              <label htmlFor="last_name_mate">Apellido Paterno</label>
            </div>
            <div className="column col-large">
              <input type="text" id="mother_name_mate" className="form-control" value={this.props.spouse_mother_name} onChange={this.props.onChangeSpouseMotherName}/>
              <label htmlFor="mother_name_mate">Apellido Materno</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">Fecha de nacimiento</div>
          </div>

          <div className="row">
            <div className="column col-small">
              <input type="text" id="day_mate" placeholder="DD" className="form-control" value={this.props.spouse_day_of_birthday} onChange={this.props.onChangeSpouseDayOfBirthday}/>
              <label htmlFor="day_mate">Día</label>
            </div>
            <div className="column col-small">
              <input type="text" id="month_mate" placeholder="MM" className="form-control" value={this.props.spouse_month_of_birthday} onChange={this.props.onChangeSpouseMonthOfBirthday}/>
              <label htmlFor="month_mate">Mes</label>
            </div>
            <div className="column col-small">
              <input type="text" id="year_mate" placeholder="AAAA" className="form-control" value={this.props.spouse_year_of_birthday} onChange={this.props.onChangeSpouseYearOfBirthday}/>
              <label htmlFor="year_mate">Año</label>
            </div>
            <div className="column col-large">
              <select id="gender_mate" role="listbox" className="form-control" onChange={this.props.onChangeSpouseGender}>
                <option value="selecciona">Selecciona</option>
              </select>
              <label htmlFor="gender_mate">Genero</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="nationality" className="form-control" value={this.props.spouse_nationality} onChange={this.props.onChangeSpouseNationality}/>
              <label htmlFor="nationality">Nacionalidad</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="phone" placeholder="56991234567" className="form-control" value={this.props.spouse_phone} onChange={this.props.onChangeSpousePhone}/>
              <label htmlFor="phone">Teléfono</label>
            </div>
            <div className="column col-large">
              <input type="text" className="form-control" id="email" value={this.props.spouse_email} onChange={this.props.onChangeSpouseEmail}/>
              <label htmlFor="email">Correo electrónico</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <select id="educational_level_mate" role="listbox" className="form-control"  onChange={this.props.onChangeSpouseEducationalLevel}>
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
              <input type="text" className="form-control" id="degree" value={this.props.spouse_degree} onChange={this.props.onChangeSpouseDegree}/>
              <label htmlFor="degree">Título / Profesión</label>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column">¿Trabaja actualmente?</div>
          </div>
          <div className="row">
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-30" value=""/>
                <label htmlFor="radio-30">SI</label>
              </div>
            </div>
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-31" value=""/>
                <label htmlFor="radio-31">NO</label>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column col-large">
              <select id="activity_mate" role="listbox" className="form-control" value={this.props.spouse_activity_type} onChange={this.props.onChangeSpouseActivityType}>
                <option value="selecciona">Selecciona</option>
                <option value="Dependiente">Dependiente</option>
                <option value="Independiente">Independiente</option>
                <option value="Pensionado">Pensionado</option>
                <option value="No trabaja">No trabaja</option>
              </select>
              <label htmlFor="activity_mate">Tipo actividad</label>
            </div>
          </div>
          <div className="row">
            <div className="column">Fecha de inicio de actividades independientes</div>
          </div>
          <div className="row">
            <div className="column col-small">
              <input type="text" id="indep_day_mate" placeholder="DD" className="form-control" value={this.props.spouse_init_activity_day} onChange={this.props.onChangeSpouseInitActivityDay}/>
              <label htmlFor="job_day_mate">Día</label>
            </div>
            <div className="column col-small">
              <input type="text" id="indep_month_mate" placeholder="MM" className="form-control" value={this.props.spouse_init_activity_month} onChange={this.props.onChangeSpouseInitActivityMonth}/>
              <label htmlFor="job_month_mate">Mes</label>
            </div>
            <div className="column col-small">
              <input type="text" id="indep_year_mate" placeholder="AAAA" className="form-control" value={this.props.spouse_init_activity_year} onChange={this.props.onChangeSpouseInitActivityYear}/>
              <label htmlFor="job_year_mate">Año</label>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="email_mate" className="form-control" value={this.props.spouse_activity} onChange={this.props.onChangeSpouseActivity}/>
              <label htmlFor="email_mate">Actividad / Cargo</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.spouse_net_income} onChange={this.props.onChangeSpouseNetIncome}/>
              <label htmlFor="">Renta líquida</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">Fecha de ingreso al cargo</div>
          </div>

          <div className="row">
            <div className="column col-small">
              <input type="text" id="job_day_mate" placeholder="DD" className="form-control" value={this.props.spouse_job_init_day} onChange={this.props.onChangeSpouseJobInitDay}/>
              <label htmlFor="job_day_mate">Día</label>
            </div>
            <div className="column col-small">
              <input type="text" id="job_month_mate" placeholder="MM" className="form-control" value={this.props.spouse_job_init_month} onChange={this.props.onChangeSpouseJobInitMonth}/>
              <label htmlFor="job_month_mate">Mes</label>
            </div>
            <div className="column col-small">
              <input type="text" id="job_year_mate" placeholder="AAAA" className="form-control" value={this.props.spouse_job_init_year} onChange={this.props.onChangeSpouseJobInitYear}/>
              <label htmlFor="job_year_mate">Año</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.spouse_employer_name} onChange={this.props.onChangeSpouseEmployerName}/>
              <label htmlFor="">Empleador</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.spouse_employer_rut} onChange={this.props.onChangeSpouseEmployerRut}/>
              <label htmlFor="">RUT empleador</label>
            </div>
            <div className="column col-large">
              <input type="text" id="industry_mate" className="form-control" value={this.props.spouse_employer_industry} onChange={this.props.onChangeSpouseEmployerIndustry}/>
              <label htmlFor="industry_mate">Giro / Actividad de la empresa</label>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.spouse_employer_address} onChange={this.props.onChangeSpouseEmployerAddress}/>
              <label htmlFor="">Dirección de la empresa</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.spouse_employer_city2} onChange={this.props.onChangeSpouseEmployerCity2}/>
              <label htmlFor="">Comuna</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.spouse_employer_city} onChange={this.props.onChangeSpouseEmployerCity}/>
              <label htmlFor="">Ciudad</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.spouse_employer_state} onChange={this.props.onChangeSpouseEmployerState}/>
              <label htmlFor="">Región</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="phone" placeholder="56991234567" className="form-control" value={this.props.spouse_employer_phone} onChange={this.props.onChangeSpouseEmployerPhone}/>
              <label htmlFor="phone">Teléfono</label>
            </div>
          </div>

        </form>
      </article>
      </div>)

  }

}
