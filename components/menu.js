import React from 'react'
import Session from '../components/session'
import {get} from 'lodash';
import Router from 'next/router'

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userData: false};
  }

  componentDidMount= () => {
    this.setState({
      userData: this.getUserData()
    })
  }

  getUserData = () => {
    const session = Session.getSession();
    return get(session, 'userData');
  }

  logout = () => {
    Session.cleanSession();
    this.setState({userData: "sdfds"})
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
