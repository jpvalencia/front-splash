import React from 'react'
import axios from 'axios';
import Router from 'next/router'
import {set, get, pickBy} from 'lodash';
import Session from '../components/session'
import servicesConfiguration from '../config/services';

export default class extends React.Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
        rut:"",
        name:"",
        last_name:"",
        mother_name:"",
        day_of_birthday:"",
        month_of_birthday:"",
        year_of_birthday:"",
        nationality:"",
        gender: "",
        marital_status:"",
        marital_regime:"",
        educational_level:"",
        degree:"",
        college:"",
        mobile_phone:"",
        user_email:"",
        country:"",
        state:"",
        city:"",
        city_2:"",//comuna
        street_name:"",
        street_number:"",
        home_number:"",
        home_ownership:"",
        monthly_payment:""
    }
  }

  setStateData  = (key, event) => {
    let state = this.state;
    set(state, key, event.target.value)
    this.setState(state);
  }

  _getUserData = () => {
      return pickBy(this.state, (data) => {
        return data !== ""
      })
  }

  update =(e) => {
    const data = this._getUserData();
    const session = Session.getSession();
    this.setState({
      userData: get(session, 'userData'),
    })
    axios.interceptors.response.use((response) => {
      return response;
    }, function (error) {
        if (error.response.status === 401) {
            Router.push({ pathname: '/login'})
        }
        return Promise.reject(error.response);
    });

    axios.put(servicesConfiguration.user + "/update/customer/information/personal",
      {data},
      {
        headers: {
          authorization: get(session, 'token')
        },
        withCredentials:true
    })
    /*
    .then((results) => {
      if(results.status === 200) {
        console.log("tuto guardado")
      }
    })
    .catch((e)=>{
      console.log("Error", e)
    });
    */
  }



  render(){

    return (<article role="form">
      <form action="" method="post">
        <h2>Datos Personales</h2>

        <div className="row">
          <div className="column col-medium">
            <input type="text" id="rut" placeholder="12345678-5" className="form-control" value={this.state.rut} onChange={e => this.setStateData("rut", e)} />
            <label htmlFor="rut">RUT</label>
          </div>
          <div className="column col-large">
            <input type="text" id="name" className="form-control" value={this.state.name} onChange={e => this.setStateData("name", e)}/>
            <label htmlFor="name">Nombres</label>
          </div>
          <div className="column col-large">
            <input type="text" id="last_name" className="form-control" value={this.state.last_name} onChange={e => this.setStateData("last_name", e)} />
            <label htmlFor="last_name">Apellido Paterno</label>
          </div>
          <div className="column col-large">
            <input type="text" id="mother_name" className="form-control" value={this.state.mother_name} onChange={e => this.setStateData("mother_name", e)} onBlur={e => this.update(e)}/>
            <label htmlFor="mother_name">Apellido Materno</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">Fecha de nacimiento</div>
        </div>

        <div className="row">
          <div className="column col-small">
            <input type="text" id="day" placeholder="DD" className="form-control" value={this.state.day_of_birthday} onChange={e => this.setStateData("day_of_birthday", e)}/>
            <label htmlFor="day">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="month" placeholder="MM" className="form-control" value={this.state.month_of_birthday} onChange={e => this.setStateData("month_of_birthday", e)}/>
            <label htmlFor="month">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="year" placeholder="AAAA" className="form-control" value={this.state.year_of_birthday} onChange={e => this.setStateData("year_of_birthday", e)}/>
            <label htmlFor="year">Año</label>
          </div>
          <div className="column col-large">
            <select id="gender" role="listbox" className="form-control" onChange={e => this.setStateData("gender", e)}>
              <option value="selecciona">Selecciona</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
            <label htmlFor="gender">Genero</label>
          </div>
          <div className="column col-large">
            <select id="nationality" role="listbox" className="form-control"  onChange={e => this.setStateData("nationality", e)} onBlur={e => this.update(e)}>
              <option value="selecciona">Selecciona</option>
            </select>
            <label htmlFor="nationality">Nacionalidad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <select id="marital_status" role="listbox" className="form-control" onChange={e => this.setStateData("marital_status", e)}>
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
            <select id="marital_regime" role="listbox" className="form-control" onChange={e => this.setStateData("marital_regime", e)} onBlur={e => this.update(e)}>
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
            <input type="text" id="phone" placeholder="56991234567" className="form-control" value={this.state.mobile_phone} onChange={e => this.setStateData("mobile_phone", e)}/>
            <label htmlFor="phone">Teléfono móvil</label>
          </div>
          <div className="column col-large">
            <input type="text" className="form-control" id="" placeholder="info@hipotecariofacil.com" value={this.state.user_email} onChange={e => this.setStateData("user_email", e)} onBlur={e => this.update(e)}/>
            <label htmlFor="email">Correo electrónico</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <select id="educational_level" role="listbox" className="form-control" onChange={e => this.setStateData("educational_level", e)}>
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
            <input type="text" className="form-control" id="degree" value={this.state.degree} onChange={e => this.setStateData("degree", e)}/>
            <label htmlFor="degree">Título / Profesión</label>
          </div>
          <div className="column col-large">
            <input type="text" className="form-control" id="college" value={this.state.college} onChange={e => this.setStateData("college", e)} onBlur={e => this.update(e)}/>
            <label htmlFor="college">Institución</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">Dirección correspondencia</div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="street_name" className="form-control" value={this.state.street_name} onChange={e => this.setStateData("street_name", e)}/>
            <label htmlFor="street_name">Calle</label>
          </div>
          <div className="column col-small">
            <input type="text" id="street_number" className="form-control" value={this.state.street_number} onChange={e => this.setStateData("street_number", e)}/>
            <label htmlFor="street_number">Número</label>
          </div>
          <div className="column col-small">
            <input type="text" id="home_number" className="form-control" value={this.state.home_number} onChange={e => this.setStateData("home_number", e)}/>
            <label htmlFor="home_number">Depto</label>
          </div>
          <div className="column col-large">
            <input type="text" id="city_2" className="form-control" value={this.state.city_2} onChange={e => this.setStateData("city_2", e)}/>
            <label htmlFor="city_2">Comuna</label>
          </div>
          <div className="column col-large">
            <input type="text" id="city" className="form-control" value={this.state.city} onChange={e => this.setStateData("city", e)} onBlur={e => this.update(e)}/>
            <label htmlFor="city">Ciudad</label>
          </div>
          <div className="column col-large">
            <input type="text" id="state" className="form-control" value={this.state.state} onChange={e => this.setStateData("state", e)}/>
            <label htmlFor="state">Región</label>
          </div>
          <div className="column col-large">
            <input type="text" id="country" className="form-control" value={this.state.country} onChange={e => this.setStateData("country", e)} onBlur={e => this.update(e)}/>
            <label htmlFor="country">País</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <select id="home_ownership" role="listbox" className="form-control" onChange={e => this.setStateData("home_ownership", e)}>
              <option value="selecciona">Selecciona</option>
            </select>
            <label htmlFor="home_ownership">Tipo de vivienda</label>
          </div>
          <div className="column col-large">
            <input type="text" id="home_ownership" className="form-control" value={this.state.monthly_payment} onChange={e => this.setStateData("monthly_payment", e)} onBlur={e => this.update(e)}/>
            <label htmlFor="home_ownership">Costo mensual</label>
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
