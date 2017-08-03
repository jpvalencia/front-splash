import React from 'react'
import Link from 'next/link'
import Session from '../components/session'
import {get, set, each} from 'lodash';

export default class extends React.Component {
  constructor(props) {
    super(props);
    const session = Session.getSession();
    this.state = { userData: "", };
  }
  componentDidMount() {
    const session = Session.getSession();
    this.setState({
      userData: get(session, 'userData'),
    })

  }
  render(){
    let header;
    if(get(this.state, 'userData')) {
      header = (
        <header>
          <div className="profile"></div>
          <div className="data-profile">
            <span><strong>{this.state.userData.nombre}</strong></span>
            <span>{this.state.userData.email}</span>
          </div>
        </header>
      )
    }
    return (<aside role="complementary">
      {header}
      <nav role="navigation">
        <button type="submit" className="btn-flat first-level first-negative">Antecedentes personales</button>
        <button type="submit" className="btn-flat first-level first-negative">Antecedentes comerciales</button>
        <button type="submit" className="btn-flat third-level third-negative">Archivos adjuntos</button>
        <button type="submit" className="btn-flat third-level third-negative">Cambiar contraseña</button>
        <button type="submit" className="btn-flat third-level third-negative">Cerrar sesión</button>
      </nav>
      <footer role="banner">
        <div className="logo"></div>
      </footer>
    </aside>)

  }

}
