import React from 'react'
import Link from 'next/link'
import Session from '../components/session'
import {get, set, each} from 'lodash';
import axios from 'axios';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const session = Session.getSession();
    this.state = {
      userData: "",
      customers:{
        difference:0,
        alert: "danger"
      },
      employees:{
        difference:0,
        alert: "danger"
      },
      real_estates: {
        difference:0,
        alert: "danger"
      },
      vehicles:{
        difference:0,
        alert: "danger"
      },
      investments:{
        difference:0,
        alert: "danger"
      },
      credits:{
        difference:0,
        alert: "danger"
      },
      loans:{
        difference:0,
        alert: "danger"
      },
      companies:{
        difference:0,
        alert: "danger"
      }
    };
  }
  componentDidMount() {
    const session = Session.getSession();
    this.setState({
      userData: get(session, 'userData'),
    })

    axios.get("/user/financial-statement", {
        params:{
          email : get(session, 'userData.email')
        },
        headers: {
          authorization: get(session, 'token')
        }
    })
      .then((result) => {
        if(result.status === 200) {
          let state = this.state;
          each(result.data, (item) => {
            const context = get(item, "context");
            if(context) {
              set(state, context+".difference", get(item, "difference"))
              if(get(item, "difference") === 0) {
                set(state, context+".alert", "success")
              }
              if(get(item, "difference") >= 1 && get(item, "difference") <= 10) {
                set(state, context+".alert", "warning")
              }
              if(get(item, "difference") >= 10) {
                set(state, context+".alert", "danger")
              }
            }
          });
          this.setState(state)
        }
      });


  }
  render(){
    let header;
    if(get(this.state, 'userData')) {
      header = (
        <header>
          <div className="img-profile"></div>
          <div className="data-profile">
            <span><strong>{this.state.userData.nombre}</strong></span>
            <span>{this.state.userData.email}</span>
            <span><a href="#">Cambiar contraseña</a></span>
						<span><a href="#">Logout</a></span>
          </div>
        </header>
      )
    }
    return (<aside role="complementary">
      {header}
      <nav role="navigation">
        <ul>
          <li className="current">
            <span>Personales</span>
            <span className={"alert " + this.state.customers.alert}>{this.state.customers.difference}</span>
          </li>
          <li>
            <span>Laborales</span>
            <span className={"alert " + this.state.employees.alert}>{this.state.employees.difference}</span>
          </li>
          <li>
            <span>Propiedades</span>
            <span className={"alert " + this.state.real_estates.alert}>{this.state.real_estates.difference}</span>
          </li>
          <li>
            <span>Vehículos</span>
            <span className={"alert " + this.state.vehicles.alert}>{this.state.vehicles.difference}</span>
          </li>
          <li>
            <span>Inversiones</span>
            <span className={"alert " + this.state.investments.alert}>{this.state.investments.difference}</span>
          </li>
          <li>
            <span>Sociedades</span>
            <span className={"alert " + this.state.companies.alert}>{this.state.companies.difference}</span>
          </li>
          <li>
            <span>Préstamos</span>
            <span className={"alert " + this.state.loans.alert}>{this.state.loans.difference}</span>
          </li>
          <li>
            <span>Créditos</span>
            <span className={"alert " + this.state.credits.alert}>{this.state.credits.difference}</span>
          </li>
          <hr/>
          <li>
            <span>Adjuntos</span>
            <span className="alert warning">0</span>
          </li>
        </ul>
      </nav>
      <footer role="banner">
        <section>
          <div className="logo"></div>
        </section>
      </footer>
    </aside>)

  }

}
