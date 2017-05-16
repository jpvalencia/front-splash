import React from 'react';
import Router from 'next/router'
import axios from 'axios';

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
        axios.post("/activate-account", {
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

  render() {

    return (
      <div>
      <h1>Cambio de password </h1>
      {
        !this.state.passwordEqualValidation ?
        (<h2>No son iguales las passwords</h2>): ""
      }
      <form  onSubmit={this.submit}>
        <p>
        <label>
          Email:
          <input type="email" name="email" disabled value={this.props.email}/>
          <input type="hidden" name="email" value={this.props.email}/>
          <input type="hidden" name="token" value={this.props.token}/>
        </label>
        <br/>
        <label>
          Password:
          <input type="password" name="password" onChange={this.passwordChange} value={this.state.password}/>
        </label>
        <br/>
        <label>
          Repetir Password:
          <input type="password" name="checkpassword" onChange={this.checkpasswordChange} value={this.state.checkpassword}/>
        </label>
        <input type="submit" value="Submit" />
        </p>
      </form>
      </div>
    )
  }

}
