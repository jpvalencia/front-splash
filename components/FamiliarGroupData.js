import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Grupo Familiar</h2>

        <div className="row">
          <div className="column col-medium">
            <input type="text" id="" placeholder="12345678-5" className="form-control"/>
            <label for="">RUT</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="" className="form-control"/>
            <label for="">Nombre</label>
          </div>
          <div className="column col-large">
            <input type="text" id="" className="form-control"/>
            <label for="">Parentesco</label>
          </div>
          <div className="column col-small">
            <input type="text" id="" className="form-control"/>
            <label for="">Edad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">Fecha de nacimiento</div>
        </div>

        <div className="row">
          <div className="column col-small">
            <input type="text" id="" placeholder="DD" className="form-control"/>
            <label for="">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="" placeholder="MM" className="form-control"/>
            <label for="">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="" placeholder="AAAA" className="form-control"/>
            <label for="">Año</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <select id="" role="listbox" className="form-control">
              <option value="selecciona">Selecciona</option>
            </select>
            <label for="">Genero</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="" className="form-control"/>
            <label for="">Actividad</label>
          </div>
          <div className="column col-large">
            <input type="text" id="" className="form-control"/>
            <label for="">Ingresos</label>
          </div>
        </div>

      </form>

      <article role="button">
        <span>Agregar Familiar</span>
        <span className="icon">+</span>
      </article>

    </article>)

  }

}
