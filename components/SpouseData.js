import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Conyuge</h2>

        <div className="row">
          <div className="column col-medium">
            <input type="text" id="rut_mate" placeholder="12345678-5" className="form-control"/>
            <label for="rut_mate">RUT</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="name_mate" className="form-control"/>
            <label for="name_mate">Nombres</label>
          </div>
          <div className="column col-large">
            <input type="text" id="last_name_mate" className="form-control"/>
            <label for="last_name_mate">Apellido Paterno</label>
          </div>
          <div className="column col-large">
            <input type="text" id="mother_name_mate" className="form-control"/>
            <label for="mother_name_mate">Apellido Materno</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">Fecha de nacimiento</div>
        </div>

        <div className="row">
          <div className="column col-small">
            <input type="text" id="day_mate" placeholder="DD" className="form-control"/>
            <label for="day_mate">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="month_mate" placeholder="MM" className="form-control"/>
            <label for="month_mate">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="year_mate" placeholder="AAAA" className="form-control"/>
            <label for="year_mate">Año</label>
          </div>
          <div className="column col-large">
            <input type="text" id="nationality" className="form-control"/>
            <label for="nationality">Nacionalidad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <select id="gender_mate" role="listbox" className="form-control">
              <option value="selecciona">Selecciona</option>
            </select>
            <label for="gender_mate">Genero</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="phone" placeholder="56991234567" className="form-control"/>
            <label for="phone">Teléfono</label>
          </div>
          <div className="column col-large">
            <input type="text" className="form-control" id="email"/>
            <label for="email">Correo electrónico</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <select id="educational_level_mate" role="listbox" className="form-control">
              <option value="selecciona">Selecciona</option>
              <option value="Educ media incompleta">Educ media incompleta</option>
              <option value="Educ media completa">Educ media completa</option>
              <option value="Técnico">Técnico</option>
              <option value="Universitaria completa">Universitaria completa</option>
              <option value="Universitaria incompleta">Universitaria incompleta</option>
              <option value="Postgrado">Postgrado</option>
            </select>
            <label for="educational_level_mate">Nivel educacional</label>
          </div>
          <div className="column col-large">
            <input type="text" className="form-control" id="degree"/>
            <label for="degree">Título / Profesión</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">¿Trabaja actualmente?</div>
          <div className="column">
            <div className="radio">
              <input type="radio" id="work_mate_yes" value="si"/>
              <label for="work_mate_yes">Si</label>
            </div>
          </div>
          <div className="column">
            <div className="radio">
              <input type="radio" id="work_mate_not" value="no"/>
              <label for="work_mate_not">No</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="email_mate" className="form-control"/>
            <label for="email_mate">Actividad / Cargo</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">Fecha de ingreso a la empresa</div>
        </div>

        <div className="row">
          <div className="column col-small">
            <input type="text" id="job_day_mate" placeholder="DD" className="form-control"/>
            <label for="job_day_mate">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="job_month_mate" placeholder="MM" className="form-control"/>
            <label for="job_month_mate">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="job_year_mate" placeholder="AAAA" className="form-control"/>
            <label for="job_year_mate">Año</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <select id="activity_mate" role="listbox" className="form-control">
              <option value="selecciona">Selecciona</option>
              <option value="Dependiente">Dependiente</option>
              <option value="Independiente">Independiente</option>
              <option value="Pensionado">Pensionado</option>
              <option value="No trabaja">No trabaja</option>
            </select>
            <label for="activity_mate">Tipo actividad</label>
          </div>
          <div className="column col-large">
            <input type="text" id="industry_mate" className="form-control"/>
            <label for="industry_mate">Giro / Actividad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">Fecha de inicio de actividades independientes</div>
        </div>

        <div className="row">
          <div className="column col-small">
            <input type="text" id="indep_day_mate" placeholder="DD" className="form-control"/>
            <label for="job_day_mate">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="indep_month_mate" placeholder="MM" className="form-control"/>
            <label for="job_month_mate">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="indep_year_mate" placeholder="AAAA" className="form-control"/>
            <label for="job_year_mate">Año</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="" className="form-control"/>
            <label for="">Dirección empresa</label>
          </div>
          <div className="column col-large">
            <input type="text" id="" className="form-control"/>
            <label for="">Comuna</label>
          </div>
          <div className="column col-large">
            <input type="text" id="" className="form-control"/>
            <label for="">Ciudad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="" className="form-control"/>
            <label for="">Región</label>
          </div>
        </div>

      </form>
    </article>)

  }

}
