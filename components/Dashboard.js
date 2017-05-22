import React from 'react';
import Router from 'next/router'
import axios from 'axios';
import Session from '../components/session'
import {has, get} from 'lodash';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInformation: {
        nombre: "",
        email : "",
        apellido: ""
      },
      banks: [],
      error:false
    };
  }

  componentDidMount() {
    let session = Session.getSession();

    if(!has(session,'userData')){
      Router.push({pathname: '/index'})
    }
    else {
      this.setState({
        personalInformation:{
          nombre: get(session, 'userData.nombre'),
          email : get(session, 'userData.email'),
          apellido: get(session, 'userData.apellido')
        }
      })
    }
  }

  send = (e) => {
    e.preventDefault();
    let session = Session.getSession()
    let self = this;
    const config = {
      headers: {'Authorization': session.token}
    }
    axios.post("/sendQuotes", this.state, config)
      .then((result) => {
        if(result.status === 200) {
          this.setState({
            error:false
          })
          //Session.saveSession(result.data.token, result.data.user);
          Router.push({pathname:'/sentInformationOk'});
        }
        if(result.status === 401) {
          session.cleanSession();
          //Deuda hay que mandar el referer para que vuelva despues de loguear
          Router.push({pathname:'/login'});
        }
        else {
          console.log("error desconocido", result.status);
          this.setState({
            error:true
          })
        }
      })
      .catch((e)=> {
        console.log("error", e);
        this.setState({
          error:true
        })
      });
    }
    changeBanks = (e)=>{
      e.preventDefault();
      let select = e.target;
      let selecteds = Array.prototype.filter.apply(
          select.options, [
            function(o) {
              return o.selected;
            }
          ]
        ).map(function(s){
          return s.value;
        });

      this.setState({banks: selecteds})

    }
  render() {

    return (
      <div>
      {
        this.state.error ?
      (<h2>Error enviando la informacion</h2>): ""
      }
      <h2>Informacion Personal</h2>
      <p>Nombre: {this.state.personalInformation.nombre}</p>
      <p>Apellido: {this.state.personalInformation.apellido}</p>
      <p>Email: {this.state.personalInformation.email}</p>
      <h2>Bancos</h2>
      <select multiple onChange={this.changeBanks}>
        <option value="BANCOESTADO">Banco Estado</option>
        <option value="BANCODECHILE">Banco de Chile</option>
        <option value="BANCOSANTANDER">Banco Santander</option>
        <option value="BANCOITAU">Banco Itau</option>
      </select>
      <button onClick={this.send}>Enviar cotizacion</button>
      </div>
    )
  }

}
