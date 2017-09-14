import React from 'react'
import Link from 'next/link'
import Session from '../components/session'
import {get, set, each} from 'lodash';
import axios from 'axios';
//import Project from './Project';
import servicesConfiguration from '../config/services';
import CustomerData from './CustomerData';
import EmployeesData from './EmployeesData';
import PropertiesData from './PropertiesData';
import VehiclesData from './VehiclesData';
import InvestmentsData from './InvestmentsData';
import CompaniesData from './CompaniesData';
import BankingData from './BankingData';
import CreditsData from './CreditsData';
import SpouseData from './SpouseData';
import FamilyData from './FamilyData';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      vehicles: [],
      investments:[],
      companies: [],
      bankings:[],
      family : []
    }
  }
  addFamily = () => {
    let prop = this.state.family;
    let length = prop.length;
    prop.push(<FamilyData key={length}/>)
    this.setState({"family": prop});
  }

  addBanking = () => {
    let prop = this.state.bankings;
    let length = prop.length;
    prop.push(<BankingData key={length}/>)
    this.setState({"bankings": prop});
  }

  addCompany = () => {
    let prop = this.state.companies;
    let length = prop.length;
    prop.push(<CompaniesData key={length}/>)
    this.setState({"companies": prop});
  }
  addInvestment = () => {
    let prop = this.state.investments;
    let length = prop.length;
    prop.push(<InvestmentsData key={length}/>)
    this.setState({"investments": prop});
  }
  addVehicle = () => {
    let prop = this.state.vehicles;
    let length = prop.length;
    prop.push(<VehiclesData key={length}/>)
    this.setState({"vehicles": prop});
  }

  addProperty = () => {
    let prop = this.state.properties;
    let length = prop.length;
    prop.push(<PropertiesData key={length}/>)
    this.setState({"properties": prop});
  }

  componentDidMount() {
    this.addProperty();
    this.addVehicle();
    this.addInvestment();
    this.addCompany();
    this.addBanking();
    this.addFamily();
  }

  render(){

    return (
      <div className="tabs">
				<input className="input1" name="tabs" type="radio" id="tab-1"  />
				<label className="label" htmlFor="tab-1">Promesa de Compra</label>
				<input className="input2" name="tabs" type="radio" id="tab-2" defaultChecked/>
				<label className="label" htmlFor="tab-2">Estado de Situación</label>

        <div className="panel1">
          <article role="document">
            <header role="document">
              <form action="" method="post">
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="" className="form-control"/>
                    <label htmlFor="">Inmobiliaria</label>
                  </div>
                </div>
                <div className="row">
                  <div className="column col-large">
                    <input type="text" id="" className="form-control"/>
                    <label htmlFor="">Nombre Proyecto / Edificio</label>
                  </div>
                  <div className="column col-small">
                    <input type="text" id="" className="form-control"/>
                    <label htmlFor="">Número</label>
                  </div>
                  <div className="column col-small">
                    <input type="text" id="" className="form-control"/>
                    <label htmlFor="">Valor en UF</label>
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="btn-flat third-level">Guardar</button>
                </div>
              </form>
              <div className="alert pending"><small>¡Una vez agregado el Proyecto deberás completar tu Estado de Situación para comenzar a negociar tu Crédito Hipotecario!</small></div>
            </header>
            <form action="" method="">
              <div>
              <div className="row">
                Condiciones del Crédito:
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="30">30</option>
                  <option value="25">25</option>
                  <option value="20">20</option>
                  <option value="15">15</option>
                </select>
                <label htmlFor="anos">Años</label>
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <label htmlFor="anos">% Pié</label>
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
                <label htmlFor="anos">Meses de gracia</label>
              </div>
              <button type="submit" className="btn-flat first-level" disabled>Pendiente para Negociar</button>
              </div>
            </form>
          </article>
          <hr/>
          <article role="document">
            <header role="document">
              <span className="nombre-inmobiliaria">Inmobiliaria Brotec</span>
              <span className="nombre-proyecto">Edificio Holanda</span>
              <span className="numero-proyecto">Depto 1002</span>
              <span className="valor-uf">3.750 UF</span>
              <a href="#"><div className="edit"></div></a>
              <div className="alert pending"><small>¡Debes completar tu Estado de Situación para comenzar a negociar tu Crédito Hipotecario!</small></div>
            </header>
            <form action="" method="">
              <div>
              <div className="row">
                Condiciones del Crédito:
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="30">30</option>
                  <option value="25">25</option>
                  <option value="20">20</option>
                  <option value="15">15</option>
                </select>
                <label htmlFor="anos">Años</label>
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <label htmlFor="anos">% Pié</label>
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
                <label htmlFor="anos">Meses de gracia</label>
              </div>
              <button type="submit" className="btn-flat first-level" disabled>Pendiente para Negociar</button>
              </div>
            </form>
          </article>
          <hr/>
          <article role="document">
            <header role="document">
              <span className="nombre-inmobiliaria">Inmobiliaria Brotec</span>
              <span className="nombre-proyecto">Edificio Holanda</span>
              <span className="numero-proyecto">Depto 1002</span>
              <span className="valor-uf">3.750 UF</span>
              <a href="#"><div className="edit"></div></a>
              <div className="alert ready"><small>¡Haz completado tu Estado de Situación y estas listo para comenzar a negociar tu Crédito Hipotecario!</small></div>
            </header>
            <form action="" method="">
              <div className="row">
                Condiciones del Crédito:
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="30">30</option>
                  <option value="25">25</option>
                  <option value="20">20</option>
                  <option value="15">15</option>
                </select>
                <label htmlFor="anos">Años</label>
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                </select>
                <label htmlFor="anos">% Pié</label>
              </div>
              <div className="row">
                <select id="anos" role="listbox" className="form-control col-xsmall">
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
                <label htmlFor="anos">Meses de gracia</label>
              </div>
              <div className="row">
                <button type="submit" className="btn-flat first-level btn-medium">Enviar a Negociar</button>
              </div>
            </form>
          </article>
          <hr/>
          <article role="document">
            <header role="document">
              <span className="nombre-inmobiliaria">Inmobiliaria Brotec</span>
              <span className="nombre-proyecto">Edificio Holanda</span>
              <span className="numero-proyecto">Depto 1002</span>
              <span className="valor-uf">3.750 UF</span>
              <span>Crédito a 30 Años, con 10% Pié y 6 Meses de gracia.</span>
              <div className="alert pending"><small>¡Estamos a la espera de comenzar a recibir la mejor tasa para tu Crédito Hipotecario!</small></div>
              <small>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat suscipit neque assumenda error, labore repudiandae, nulla, cum doloribus fuga possimus corrupti molestiae!</small>
            </header>
            <form action="" method="">
              <div className="row">
                <span className="banco"> - - </span>
              </div>
              <div className="row">
                <span className="mark">CAE</span>
                <span className="cae"> - - </span>
              </div>
              <div className="row">
                <span className="mark">DIV$</span>
                <span className="dividendo"> - - </span>
              </div>
              <div className="row">
                <span className="mark">Plazo</span>
                <span className="plazo"> - - </span>
              </div>
              <div className="row">
                <span className="mark">Gracia</span>
                <span className="gracia"> - - </span>
              </div>
              <div className="row">
                <button type="submit" className="btn-flat first-level btn-medium" disabled>Aceptar Crédito</button>
                <button type="submit" className="btn-flat third-level btn-small" disabled>Ver todas las tasas recibidas</button>
              </div>
            </form>
          </article>
          <hr/>
          <article role="document">
            <header role="document">
              <span className="nombre-inmobiliaria">Inmobiliaria Brotec</span>
              <span className="nombre-proyecto">Edificio Holanda</span>
              <span className="numero-proyecto">Depto 1002</span>
              <span className="valor-uf">3.750 UF</span>
              <span>Crédito a 30 Años, con 10% Pié y 6 Meses de gracia.</span>
              <div className="alert ready"><small>¡Esta es la mejor tasa que te ofrecen las instituciones bancarias para tu Crédito Hipotecario!</small></div>
              <small>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore repudiandae, nulla, cum doloribus fuga possimus corrupti molestiae! Aliquam tempora debitis.</small>
            </header>
            <form action="" method="">
              <div className="row">
                <span className="banco">Banco de Crédito e Inversiones</span>
              </div>
              <div className="row">
                <span className="mark">CAE</span>
                <span className="cae">3.6%</span>
              </div>
              <div className="row">
                <span className="mark">DIV$</span>
                <span className="dividendo">585.900</span>
              </div>
              <div className="row">
                <span className="mark">Plazo</span>
                <span className="plazo">30 años</span>
              </div>
              <div className="row">
                <span className="mark">Gracia</span>
                <span className="gracia">6 meses</span>
              </div>
              <div className="row">
                <button type="submit" className="btn-flat first-level btn-medium">Aceptar Crédito</button>
                <button type="submit" className="btn-flat third-level btn-small">Ver todas las tasas recibidas</button>
              </div>
            </form>
          </article>
          <hr/>
          <article role="document">
            <header role="document">
              <span className="nombre-inmobiliaria">Inmobiliaria Brotec</span>
              <span className="nombre-proyecto">Edificio Holanda</span>
              <span className="numero-proyecto">Depto 1002</span>
              <span className="valor-uf">3.750 UF</span>
              <span>Crédito a 30 Años, con 10% Pié y 6 Meses de gracia.</span>
              <div className="alert ready"><small>¡Esta es la mejor tasa que te ofrecen las instituciones bancarias para tu Crédito Hipotecario!</small></div>
              <small>* Lorem ipsum dolor sit amet, consectetur adipisicing elit cum doloribus fuga molestiae!</small>
            </header>
            <form action="" method="">
              <div className="row">
                <span className="banco">Banco de Crédito e Inversiones</span>
              </div>
              <div className="row">
                <span className="mark">CAE</span>
                <span className="cae">3.6%</span>
              </div>
              <div className="row">
                <span className="mark">DIV$</span>
                <span className="dividendo">585.900</span>
              </div>
              <div className="row">
                <span className="mark">Plazo</span>
                <span className="plazo">30 años</span>
              </div>
              <div className="row">
                <span className="mark">Gracia</span>
                <span className="gracia">6 meses</span>
              </div>
              <div className="row">
                <button type="submit" className="btn-flat first-level btn-medium">Aceptar Crédito</button>
                <button type="submit" className="btn-flat third-level btn-small">Ver todas las tasas recibidas</button>
              </div>
            </form>
          </article>
          <article role="grid">
            <div className="row">
              <h3>Lorem Ipsum dolor sit amet</h3>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus vero non commodi sunt. Enim perferendis sequi, tempore beatae dolor suscipit ex esse placeat, labore fugit minima, totam quia ratione.</span>
            </div>
            <div className="row">
              <table cellPadding="0" cellSpacing="0" className="responsive-table">
                <thead>
                  <tr>
                    <th scope="col">Banco</th>
                    <th scope="col">CAE</th>
                    <th scope="col">Dividendo</th>
                    <th scope="col">Plazo</th>
                    <th scope="col">Gracia</th>
                    <th scope="col">Pié</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">Banco Crédito e Inversiones</td>
                    <td data-title="CAE" data-type="">2.8%</td>
                    <td data-title="Dividendo" data-type="">$500.000</td>
                    <td data-title="Plazo" data-type="">20 años</td>
                    <td data-title="Gracia" data-type="">6 meses</td>
                    <td data-title="Pié" data-type="">10%</td>
                    <td data-title="" data-type=""><button type="submit" className="btn-flat third-level btn-xsmall">Aceptar Crédito</button></td>
                  </tr>
                  <tr>
                    <td scope="row">Banco Crédito e Inversiones</td>
                    <td data-title="CAE" data-type="">2.8%</td>
                    <td data-title="Dividendo" data-type="">$500.000</td>
                    <td data-title="Plazo" data-type="">20 años</td>
                    <td data-title="Gracia" data-type="">6 meses</td>
                    <td data-title="Pié" data-type="">10%</td>
                    <td data-title="" data-type=""><button type="submit" className="btn-flat third-level btn-xsmall">Aceptar Crédito</button></td>
                  </tr>
                  <tr>
                    <td scope="row">Banco Crédito e Inversiones</td>
                    <td data-title="CAE" data-type="">2.8%</td>
                    <td data-title="Dividendo" data-type="">$500.000</td>
                    <td data-title="Plazo" data-type="">20 años</td>
                    <td data-title="Gracia" data-type="">6 meses</td>
                    <td data-title="Pié" data-type="">10%</td>
                    <td data-title="" data-type=""><button type="submit" className="btn-flat third-level btn-xsmall">Aceptar Crédito</button></td>
                  </tr>
                  <tr className="best">
                    <td scope="row">Banco Crédito e Inversiones</td>
                    <td data-title="CAE" data-type="">2.8%</td>
                    <td data-title="Dividendo" data-type="">$500.000</td>
                    <td data-title="Plazo" data-type="">20 años</td>
                    <td data-title="Gracia" data-type="">6 meses</td>
                    <td data-title="Pié" data-type="">10%</td>
                    <td data-title="" data-type=""><button type="submit" className="btn-flat third-level btn-xsmall">Aceptar Crédito</button></td>
                  </tr>
                  <tr>
                    <td scope="row">Banco Crédito e Inversiones</td>
                    <td data-title="CAE" data-type="">2.8%</td>
                    <td data-title="Dividendo" data-type="">$500.000</td>
                    <td data-title="Plazo" data-type="">20 años</td>
                    <td data-title="Gracia" data-type="">6 meses</td>
                    <td data-title="Pié" data-type="">10%</td>
                    <td data-title="" data-type=""><button type="submit" className="btn-flat third-level btn-xsmall">Aceptar Crédito</button></td>
                  </tr>
                  <tr>
                    <td scope="row">Banco Crédito e Inversiones</td>
                    <td data-title="CAE" data-type="">2.8%</td>
                    <td data-title="Dividendo" data-type="">$500.000</td>
                    <td data-title="Plazo" data-type="">20 años</td>
                    <td data-title="Gracia" data-type="">6 meses</td>
                    <td data-title="Pié" data-type="">10%</td>
                    <td data-title="" data-type=""><button type="submit" className="btn-flat third-level btn-xsmall">Aceptar Crédito</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>

        <div className="panel2">
          <CustomerData/>
          <hr/>
          <EmployeesData/>
          <hr/>
          <SpouseData/>
          <hr/>
          {this.state.family}
          <hr/>
          {this.state.properties}
          <hr/>
          {this.state.vehicles}
          <hr/>
          {this.state.investments}
          <hr/>
          {this.state.companies}
          <hr/>
          {this.state.bankings}

        </div>
    </div>)

  }

}
