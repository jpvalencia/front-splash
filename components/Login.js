import React from 'react';
import Router from 'next/router'
import axios from 'axios';
import session from '../components/session'
import servicesConfiguration from '../config/services'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email : "",
      failLogin: false
    };
  }

  passwordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  emailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  submit = (e) => {
    e.preventDefault();
    let self = this;
    axios.post(servicesConfiguration.auth + "/auth", {
      email: this.state.email,
      password: this.state.password})
      .then((result) => {
        if(result.status === 200) {
          session.saveSession(result.data.token, result.data.user);
          Router.push({pathname:'/dashboard'});
        }
        else {
          self.setState({failLogin: true});
        }
      })
      .catch((e)=> {
        console.log("error", e);
        self.setState({failLogin: true});
      });

    }

    componentDidMount() {
      document.getElementById("email").focus();
    }

  render() {

    return (
      <div>
      <h1>Login </h1>
      {
        this.state.failLogin ?
        (<h2>Problema loguenando intente de nuevo</h2>): ""
      }
      <h2>Acceso cuenta</h2>
			<p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>. Sapiente reprehenderit ab qui esse placeat.</p>
			<form onSubmit= {this.submit}>
				<input type="text" className="form-control" name="email" onChange={this.emailChange} value={this.state.email} id="email" placeholder="abrdog2@gmail.com" />
				<input type="password" id="ipsum" className="form-control" placeholder="Password" onChange={this.passwordChange} value={this.state.password} />
				<button type="submit" className="btn-flat first-level">Entrar</button>
			</form>
      </div>
    )
  }

}
