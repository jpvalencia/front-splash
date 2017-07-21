import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Inversiones</h2>

        <div className="row">
          <div className="column col-large">
            <select id="investment_type" role="listbox" className="form-control">
              <option value="selecciona">Selecciona</option>
              <option value="Depositio a plazo">Depositio a plazo</option>
              <option value="Fondos mutuos">Fondos mutuos</option>
              <option value="Ahorro">Ahorro</option>
              <option value="Acciones">Acciones</option>
              <option value="Otros">Otros</option>
            </select>
            <label for="investment_type">Tipo de inversión</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="investment_issuer" className="form-control"/>
            <label for="investment_issuer">Institución emisora</label>
          </div>
          <div className="column col-large">
            <input type="text" id="investment_mortgagor_flg" className="form-control"/>
            <label for="investment_mortgagor_flg">Prenda</label>
          </div>
          <div className="column col-large">
            <input type="text" id="investment_value" className="form-control"/>
            <label for="investment_value">Valor comercial</label>
          </div>
        </div>

      </form>

      <article role="button">
        <span>Agregar Inversión</span>
        <span className="icon">+</span>
      </article>

    </article>)

  }

}
