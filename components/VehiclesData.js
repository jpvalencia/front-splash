import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<div>
      <article role="form">
        <form action="" method="post">
          <h2>Vehículos</h2>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="vehicle_id" placeholder="AABB11" className="form-control" value={this.props.vehicle_id} onChange={this.props.onChangeVehicleId}/>
              <label htmlFor="vehicle_id">Patente</label>
            </div>
            <div className="column col-large">
              <input type="text" id="vehicle_type" className="form-control" value={this.props.vehicle_type} onChange={this.props.onChangeVehicleType}/>
              <label htmlFor="vehicle_type">Tipo de vehículo</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="vehicle_brand" className="form-control" value={this.props.vehicle_brand} onChange={this.props.onChangeVehicleBrand}/>
              <label htmlFor="vehicle_brand">Marca</label>
            </div>
            <div className="column col-large">
              <input type="text" id="vehicle_model" className="form-control" value={this.props.vehicle_model} onChange={this.props.onChangeVehicleModel}/>
              <label htmlFor="vehicle_model">Modelo</label>
            </div>
            <div className="column col-large">
              <input type="text" id="vehicle_year" className="form-control" value={this.props.vehicle_year} onChange={this.props.onChangeVehicleYear}/>
              <label htmlFor="vehicle_year">Año</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="vehicle_value" className="form-control" value={this.props.vehicle_value} onChange={this.props.onChangeVehicleValue}/>
              <label htmlFor="vehicle_value">Valor comercial</label>
            </div>
            <div className="column col-large">
              <input type="text" id="vehicle_insurance_flg" className="form-control" value={this.props.vehicle_insurance_flg} onChange={this.props.onChangeVehicleInsuranceFlg}/>
              <label htmlFor="vehicle_insurance_flg">Seguro</label>
            </div>
            <div className="column col-large">
              <input type="text" id="vehicle_mortgagor_flg" className="form-control" value={this.props.vehicle_mortgagor_flg} onChange={this.props.onChangeVehicleMortgagorFlg}/>
              <label htmlFor="vehicle_mortgagor_flg">Institución</label>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column">¿Tiene deuda?</div>
          </div>
          <div className="row">
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-20" value=""/>
                <label htmlFor="radio-20">SI</label>
              </div>
            </div>
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-21" value=""/>
                <label htmlFor="radio-21">NO</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="vehicle_fee_unpaid" className="form-control col-small" value={this.props.vehicle_fee_unpaid} onChange={this.props.onChangeVehicleFeeUnpaid}/>
              <label htmlFor="">Cuotas por pagar</label>
            </div>
            <div className="column col-large">
              <input type="text" id="vehicle_monthly_payment" className="form-control" value={this.props.vehicle_monthly_payment} onChange={this.props.onChangeVehicleIdMonthlyPayment}/>
              <label htmlFor="">Pago mensual</label>
            </div>
          </div>

        </form>
      </article>
      <article role="button">
        <span>Agregar Vehículo</span>
        <span className="icon">+</span>
      </article>
      </div>)

  }

}
