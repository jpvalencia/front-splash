import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="application">
      <form action="" method="post">
        <h2>Propiedades</h2>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_id" placeholder="000-00" className="form-control"/>
            <label for="property_id">Rol</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_city_2" className="form-control"/>
            <label for="property_city_2">Comuna</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_address" className="form-control"/>
            <label for="property_address">Dirección</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_type" className="form-control"/>
            <label for="property_type">Tipo de propiedad</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_value" className="form-control"/>
            <label for="property_value">Valor de la propiedad</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_mortgagor" className="form-control"/>
            <label for="property_mortgagor">Hipoteca a favor de</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_fiscal_value" className="form-control"/>
            <label for="property_fiscal_value">Avalúo fiscal</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_insurance_flg" className="form-control"/>
            <label for="property_insurance_flg">Seguro</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">Fecha de último dividendo</div>
        </div>

        <div className="row">
          <div className="column col-small">
            <input type="text" id="property_last_payment_day" placeholder="DD" className="form-control"/>
            <label for="property_last_payment_day">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="property_last_payment_month" placeholder="MM" className="form-control"/>
            <label for="property_last_payment_month">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="property_last_payment_year" placeholder="AAAA" className="form-control"/>
            <label for="property_last_payment_year">Año</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_surface_sqt" className="form-control"/>
            <label for="property_surface_sqt">Superficie</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_rental_income" className="form-control"/>
            <label for="property_rental_income">Arriendo obtenido</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_perc_ownership" className="form-control"/>
            <label for="property_perc_ownership">Porcentaje de propiedad</label>
          </div>
        </div>

      </form>

      <article role="button">
        <span>Agregar Propiedad</span>
        <span className="icon">+</span>
      </article>

    </article>)

  }

}
