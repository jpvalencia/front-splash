import React from 'react'
import Session from '../components/session'
import {get} from 'lodash';
import Router from 'next/router'

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const session = Session.getSession();
    let userData = get(session, 'userData');
    this.setState({
      userData: userData
    })

  }

  logout() {
    Session.cleanSession();
    Router.push('/index')
  }

  render(){

    let menu = "";
    if(get(this.state, 'userData')) {
      menu = (
        <div>
          <div>{ this.state.userData.email }</div>
          <div><span onClick = {this.logout}>logout</span></div>
        </div>
      )
    }

    return (
      <div>
      {menu}
      </div>
    )

  }

}
