import React from 'react';
import Collapsible from 'react-collapsible';
import {set, get} from 'lodash';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render(){

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Cargas Familiares</h2>
          <div className="row">
            <table cellPadding="0" cellSpacing="0" className="responsive-table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Parentesco</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Género</th>
                  <th scope="col">Editar</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Sacarías La Fuente De La Plaza</td>
                  <td data-title="Parentesco" data-type="">Hijo</td>
                  <td data-title="Edad" data-type="">100</td>
                  <td data-title="Género" data-type="">Másculino</td>
                  <td data-title="Editar" data-type=""><a href="#"><div className="edit"></div></a></td>
                  <td data-title="Eliminar" data-type=""><a href="#"><div className="delete"></div></a></td>
                </tr>
              </tbody>
            </table>
          </div>
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
                <button type="submit" className="btn-flat first-level btn-large">Guardar</button>
              </div>
              </div>
            </Collapsible>
          </div>
        </form>
      </article>)

  }

}
