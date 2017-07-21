import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Vehículos</h2>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="vehicle_id" placeholder="AABB11" className="form-control"/>
            <label for="vehicle_id">Patente</label>
          </div>
          <div className="column col-large">
            <input type="text" id="vehicle_type" className="form-control"/>
            <label for="vehicle_type">Tipo de vehículo</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="vehicle_brand" className="form-control"/>
            <label for="vehicle_brand">Marca</label>
          </div>
          <div className="column col-large">
            <input type="text" id="vehicle_model" className="form-control"/>
            <label for="vehicle_model">Modelo</label>
          </div>
          <div className="column col-large">
            <input type="text" id="vehicle_year" className="form-control"/>
            <label for="vehicle_year">Año</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="vehicle_mortgagor_flg" className="form-control"/>
            <label for="vehicle_mortgagor_flg">Prenda</label>
          </div>
          <div className="column col-large">
            <input type="text" id="vehicle_value" className="form-control"/>
            <label for="vehicle_value">Valor comercial</label>
          </div>
          <div className="column col-large">
            <input type="text" id="vehicle_insurance_flg" className="form-control"/>
            <label for="vehicle_insurance_flg">Seguro</label>
          </div>
        </div>

      </form>

      <article role="button">
        <span>Agregar Vehículo</span>
        <span className="icon">+</span>
      </article>

    </article>)

  }

}
