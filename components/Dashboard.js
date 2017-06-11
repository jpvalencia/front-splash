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

  render() {

    return (<div className="container">
        <div className="container-menu">
          <ul>
            <li>ico01</li>
            <li>ico02</li>
            <li>ico03</li>
            <li>ico04</li>
            <li>ico05</li>
            <li>ico06</li>
          </ul>
        </div>
        <div className="container-cards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
    </div>)
  }

}
