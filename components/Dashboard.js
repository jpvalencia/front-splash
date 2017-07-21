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

    return (
    <div></div>
    )
  }

}
