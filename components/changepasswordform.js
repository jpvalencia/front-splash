import React from 'react';
import Router from 'next/router'
import axios from 'axios';
import servicesConfiguration from '../config/services';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      checkpassword: "",
      passwordEqualValidation : true
    };
  }

  passwordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  checkpasswordChange = (e) => {
    this.setState({
      checkpassword: e.target.value
    });
  }

  submit = (e) => {
      e.preventDefault();
      let validateOk = true;
      if(this.state.password !== this.state.checkpassword) {
        this.setState({passwordEqualValidation : false});
        validateOk = false;
      }
      else {
        this.setState({passwordEqualValidation : true});
      }

      if(validateOk) {
        axios.post(servicesConfiguration.auth + "/activate-account", {
          email: this.props.email,
          token: this.props.token,
          password: this.state.password})
          .then((result) => {
            if(result.status === 200) {
              Router.push('/activate-account-success')
            }
            else {
              Router.push('/activate-account-error')
            }
          })
          .catch((e)=> {
            Router.push('/activate-account-error')
          });

      }

    }

  componentDidMount() {
    document.getElementById("password").focus();
  }

  render() {

    return (
      <div>
        <h1>Cambio de password </h1>
        {
          !this.state.passwordEqualValidation ?
          (<h2>No son iguales las passwords</h2>): ""
        }
        <h2>Activación cuenta</h2>
  			<p>Lorem ipsum dolor sit amet, <strong>consectetur adipisicing elit</strong>. Sapiente reprehenderit ab qui esse placeat.</p>
  			<form onSubmit={this.submit}>
          <input type="email" name="email" className="form-control" disabled value={this.props.email}/>
          <input type="hidden" name="email" value={this.props.email}/>
          <input type="hidden" name="token" value={this.props.token}/>
  				<input type="password" id="password" name="password" onChange={this.passwordChange} value={this.state.password} className="form-control" placeholder="Nueva password" />
  				<input type="password" id="ipsum" name="checkpassword" onChange={this.checkpasswordChange} value={this.state.checkpassword} className="form-control" placeholder="Confirme password" />
  				<button type="submit" className="btn-flat first-level">Activar</button>
  			</form>
      </div>
    )
  }

}
