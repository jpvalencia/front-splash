import React from 'react';
import Router from 'next/router'
import axios from 'axios';
import Header from '../components/Header';
import servicesConfiguration from '../config/services'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      message : ""
    };
  }

  emailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  submit = (e) => {
    e.preventDefault();
    let self = this;
    axios.post(servicesConfiguration.auth + "/auth/subscribe", {
      email: this.state.email})
      .then((result) => {
        if(result.status === 200) {
          // session.saveSession(result.data.token, result.data.user);
          self.setState({message: "Gracias, estaremos pronto en contacto!"});
        }
        else {
          self.setState({message: "Upps... algo falló!!"});
        }
      })
      .catch((e)=> {
        console.log("error", e);
        self.setState({message: "Ya estás inscrito, queda cada vez menos para que sepas de nosotros!"})

      });

    }

 

  render() {

    return (
      <div>
      <Header/>
      <main>
       
      <article role="document">
      <div className="logo"></div>

        <h2>¡Ahorra 20 millones en tu crédito hipotecario!</h2>

        <p>Negociamos con todos los bancos para conseguirte la mejor tasa.</p> 
        <p>¡Solo ingresas tus datos una vez!.</p>
        <p>Déjanos tu correo y te enviaremos una invitación:</p>
        <form onSubmit= {this.submit}>
        <div className="row"><input type="text" className="form-control" onChange={this.emailChange} value={this.state.email} id="" placeholder="Email"></input></div>
        <div className="row"><button type="submit" className="btn-flat first-level">Enviar</button></div>
        </form>
        

      </article>
      <h3><b>{this.state.message}</b></h3>
            <footer>
      <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus tempora quia nobis debitis! Exercitationem, voluptatibus dolorum.</small>
      </footer>

      </main>
      </div>
    )
  }

}
