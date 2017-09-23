import React from 'react';
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
import FamilyResume from './FamilyResume';
import servicesHelper from './helpers/servicesFamily';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded:false,
      dependent_quantity:"",
      name:"",
      relationship:"",
      age:"",
      day_of_birthday:"",
      month_of_birthday:"",
      year_of_birthday:"",
      gender:"",
      activity:"",
      income:"",
      pension_ammount:""
    };
  };

  setStateData  = (key, event) => {
    let state = this.state;
    set(state, key, event.target.value)
    this.setState(state);
  }

  update = () => {
    const endpointUpdate = '/customer/information/family';
    servicesHelper.update(endpointUpdate, this.state)
    .then(()=> {
      this.refs.resume.getResume();
    });
  };

  render(){

    if(!this.state.loaded) {
      return <img src ="https://loading.io/assets/img/hourglass.svg"/>;
    }

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Cargas Familiares</h2>
          <FamilyResume ref="resume"/>
          <div className="custom-show-hide">
            <Collapsible trigger="Agregar Carga">
             <div className="collapse">
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="" className="form-control" value={this.state.name} onChange={e => this.setStateData("name", e)}/>
                  <label htmlFor="">Nombre</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="" className="form-control" value={this.state.relationship} onChange={e => this.setStateData("relationship", e)}/>
                  <label htmlFor="">Parentesco</label>
                </div>
                <div className="column col-small">
                  <input type="text" id="" className="form-control" value={this.state.age} onChange={e => this.setStateData("age", e)}/>
                  <label htmlFor="">Edad</label>
                </div>
              </div>

              <div className="row">
                <div className="column col-large">Fecha de nacimiento</div>
              </div>

              <div className="row">
                <div className="column col-small">
                  <input type="text" id="" placeholder="DD" className="form-control" value={this.state.day_of_birthday} onChange={e => this.setStateData("day_of_birthday", e)}/>
                  <label htmlFor="">Día</label>
                </div>
                <div className="column col-small">
                  <input type="text" id="" placeholder="MM" className="form-control" value={this.state.month_of_birthday} onChange={e => this.setStateData("month_of_birthday", e)}/>
                  <label htmlFor="">Mes</label>
                </div>
                <div className="column col-small">
                  <input type="text" id="" placeholder="AAAA" className="form-control" value={this.state.year_of_birthday} onChange={e => this.setStateData("year_of_birthday", e)}/>
                  <label htmlFor="">Año</label>
                </div>
                <div className="column col-large">
                  <select id="" role="listbox" className="form-control" onChange={e => this.setStateData("gender", e)}>
                    <option value="selecciona">Selecciona</option>
                  </select>
                  <label htmlFor="">Genero</label>
                </div>
                <div className="column col-large">
                  <input type="text" id="" className="form-control" value={this.state.activity} onChange={e => this.setStateData("activity", e)}/>
                  <label htmlFor="">Actividad</label>
                </div>
              </div>
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="" className="form-control" value={this.state.income} onChange={e => this.setStateData("income", e)}/>
                  <label htmlFor="">Ingresos</label>
                </div>
              </div>
              <div className="row">
                <div className="column col-large">
                  <input type="text" id="" className="form-control" value={this.state.pension_ammount} onChange={e => this.setStateData("pension_ammount", e)}/>
                  <label htmlFor="">Monto de la pensión</label>
                </div>
              </div>
              <div className="row controls">
                <button type="button" className="btn-flat first-level btn-large" onClick={this.update}>Guardar</button>
              </div>
              </div>
            </Collapsible>
          </div>
        </form>
      </article>)

  }

}
