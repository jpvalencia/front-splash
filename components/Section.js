import React from 'react'
import Link from 'next/link'
import Session from '../components/session'
import {get, set, each} from 'lodash';
import axios from 'axios';
import Project from './Project';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    const session = Session.getSession();
    this.setState({
      userData: get(session, 'userData'),
    })

    axios.get("/user/projects", {
        params:{
          email : get(session, 'userData.email')
        },
        headers: {
          authorization: get(session, 'token')
        }
    })
      .then((results) => {
        if(results.status === 200) {
          this.setState({
            projects: results.data,
          })
        }
      });


  }
  render(){
    let projects = []
    if(get(this.state, "projects").length > 0) {
      each(this.state.projects, (project) => {
        projects.push(<Project key={project.nombre_inmobiliaria} nombre_inmobiliaria = {project.nombre_inmobiliaria} nombre_proyecto =  {project.nombre_proyecto} nro_depto_casa={project.nro_depto_casa} valor={project.valor} />)
      })
    }

    return (<section role="region">
      <h1>¡Completa tu Carpeta para poder comenzar a negociar!</h1>
      <p>Tómate el tiempo que sea necesario para conseguir armar el Proyecto y estar listo para negociar.</p>
      <p>Proyectos:</p>
      <article role="application">
        {projects}
      </article>
      <article role="button">
        <span>Agregar proyecto</span>
        <span className="icon">+</span>
      </article>

    </section>)

  }

}
