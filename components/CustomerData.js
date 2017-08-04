import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="form">
      <form action="" method="post">
        <h2>Datos Personales</h2>

        <div className="row">
          <div className="column col-medium">
            <input type="text" id="rut" placeholder="12345678-5" className="form-control" value={this.props.foid} onChange={this.props.onChangeFoid} onBlur = {this.props.onBlurFoid}/>
            <label htmlFor="rut">RUT</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="name" className="form-control" value={this.props.name} onChange={this.props.onChangeName}/>
            <label htmlFor="name">Nombres</label>
          </div>
          <div className="column col-large">
            <input type="text" id="last_name" className="form-control" value={this.props.lastName} onChange={this.props.onChangeLastName} />
            <label htmlFor="last_name">Apellido Paterno</label>
          </div>
          <div className="column col-large">
            <input type="text" id="mother_name" className="form-control" value={this.props.motherName} onChange={this.props.onChangeMotherName}/>
            <label htmlFor="mother_name">Apellido Materno</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">Fecha de nacimiento</div>
        </div>

        <div className="row">
          <div className="column col-small">
            <input type="text" id="day" placeholder="DD" className="form-control" value={this.props.dayOfBirthday} onChange={this.props.onChangeDayOfBirthday}/>
            <label htmlFor="day">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="month" placeholder="MM" className="form-control" value={this.props.monthOfBirthday} onChange={this.props.onChangeMonthOfBirthday}/>
            <label htmlFor="month">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="year" placeholder="AAAA" className="form-control" value={this.props.yearOfBirthday} onChange={this.props.onChangeYearOfBirthday}/>
            <label htmlFor="year">Año</label>
          </div>
          <div className="column col-large">
            <input type="text" id="nationality" className="form-control" value={this.props.nationality} onChange={this.props.onChangeNationality}/>
            <label htmlFor="nationality">Nacionalidad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <select id="gender" role="listbox" className="form-control" onChange={this.props.onChangeGender}>
              <option value="selecciona">Selecciona</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
            <label htmlFor="gender">Genero</label>
          </div>
          <div className="column col-large">
            <select id="marital_status" role="listbox" className="form-control" onChange={this.props.onChangeMaritalStatus}>
              <option value="selecciona">Selecciona</option>
              <option value="Casado">Casado</option>
              <option value="Soltero">Soltero</option>
              <option value="Viudo">Viudo</option>
              <option value="Separado">Separado</option>
              <option value="Acuerdo de unión civil">Acuerdo de unión civil</option>
            </select>
            <label htmlFor="marital_status">Estado civil</label>
          </div>
          <div className="column col-large">
            <select id="marital_regime" role="listbox" className="form-control" onChange={this.props.onChangeMaritalRegime}>
              <option value="selecciona">Selecciona</option>
              <option value="Con separación de bienes">Con separación de bienes</option>
              <option value="Sociedad conyugal">Sociedad conyugal</option>
              <option value="Participación en gananciales">Participación en gananciales</option>
              <option value="Comunidad de bienes">Comunidad de bienes</option>
            </select>
            <label htmlFor="marital_regime">Régimen</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <select id="educational_level" role="listbox" className="form-control" onChange={this.props.onChangeEducationalLevel}>
              <option value="selecciona">Selecciona</option>
              <option value="Educ media incompleta">Educ media incompleta</option>
              <option value="Educ media completa">Educ media completa</option>
              <option value="Técnico">Técnico</option>
              <option value="Universitaria completa">Universitaria completa</option>
              <option value="Universitaria incompleta">Universitaria incompleta</option>
              <option value="Postgrado">Postgrado</option>
            </select>
            <label htmlFor="educational_level">Nivel educacional</label>
          </div>
          <div className="column col-large">
            <input type="text" className="form-control" id="degree" value={this.props.degree} onChange={this.props.onChangeDegree}/>
            <label htmlFor="degree">Título / Profesión</label>
          </div>
          <div className="column col-large">
            <input type="text" className="form-control" id="college" value={this.props.college} onChange={this.props.onChangeCollege}/>
            <label htmlFor="college">Institución</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="phone" placeholder="56991234567" className="form-control" value={this.props.mobile_phone} onChange={this.props.onChangeMobilePhone}/>
            <label htmlFor="phone">Teléfono</label>
          </div>
          <div className="column col-xlarge">
            <input type="text" className="form-control col-medium" id="email" placeholder="hotmail.com" value={this.props.user_email} onChange={this.props.onChangeUserEmail}/>@
            <input type="text" className="form-control col-medium" id="email" placeholder="carlos" value={this.props.server_email} onChange={this.props.onChangeServerEmail}/>
            <label htmlFor="email">Correo electrónico</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="country" className="form-control" value={this.props.country} onChange={this.props.onChangeCountry}/>
            <label htmlFor="country">País</label>
          </div>
          <div className="column col-large">
            <input type="text" id="state" className="form-control" value={this.props.state} onChange={this.props.onChangeState}/>
            <label htmlFor="state">Región</label>
          </div>
          <div className="column col-large">
            <input type="text" id="city" className="form-control" value={this.props.city} onChange={this.props.onChangeCity}/>
            <label htmlFor="city">Ciudad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="city_2" className="form-control" value={this.props.city_2} onChange={this.props.onChangeCity2}/>
            <label htmlFor="city_2">Comuna</label>
          </div>
          <div className="column col-large">
            <input type="text" id="street_name" className="form-control" value={this.props.street_name} onChange={this.props.onChangeStreetName}/>
            <label htmlFor="street_name">Calle</label>
          </div>
          <div className="column col-small">
            <input type="text" id="street_number" className="form-control" value={this.props.street_number} onChange={this.props.onChangeStreetNumber}/>
            <label htmlFor="street_number">Número</label>
          </div>
          <div className="column col-small">
            <input type="text" id="home_number" className="form-control" value={this.props.department_number} onChange={this.props.onChangeDepartmentNumber}/>
            <label htmlFor="home_number">Depto</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <select id="home_ownership" role="listbox" className="form-control" onChange={this.props.onChangeHomeOwnership}>
              <option value="selecciona">Selecciona</option>
            </select>
            <label htmlFor="home_ownership">Tipo de vivienda</label>
          </div>
          <div className="column col-large">
            <input type="text" id="home_ownership" className="form-control" value={this.props.monthly_payment} onChange={this.props.onChangeMonthlyPayment}/>
            <label htmlFor="home_ownership">Costo mensual</label>
          </div>
        </div>

      </form>
    </article>)

  }

}
