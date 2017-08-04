import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (<article role="form">
      <form action="" method="post">
        <h2>Propiedades</h2>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_id" placeholder="000-00" className="form-control" value={this.props.property_id} onChange={this.props.onChangePropertyId}/>
            <label htmlFor="property_id">Número de Rol</label>
          </div>
        </div>

        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_type" className="form-control" value={this.props.property_type} onChange={this.props.onChangePropertyType}/>
            <label htmlFor="property_type">Tipo de propiedad</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_value" className="form-control" value={this.props.property_value} onChange={this.props.onChangePropertyValue}/>
            <label htmlFor="property_value">Valor de la propiedad</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_fiscal_value" className="form-control" value={this.props.property_fiscal_value} onChange={this.props.onChangePropertyFiscalValue}/>
            <label htmlFor="property_fiscal_value">Avalúo fiscal</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_perc_ownership" className="form-control" value={this.props.property_perc_ownership} onChange={this.props.onChangePropertyPercOwnership}/>
            <label htmlFor="property_perc_ownership">Porcentaje de propiedad</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_surface_sqt" className="form-control" value={this.props.property_surface_sqt} onChange={this.props.onChangePropertySurfaceSqt}/>
            <label htmlFor="property_surface_sqt">Superficie</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_address" className="form-control" value={this.props.property_address} onChange={this.props.onChangePropertyAddress}/>
            <label htmlFor="property_address">Dirección</label>
          </div>
          <div className="column col-large">
            <input type="text" id="property_city_2" className="form-control" value={this.props.property_city_2} onChange={this.props.onChangePropertyCity2}/>
            <label htmlFor="property_city_2">Comuna</label>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="column">¿Posee Hipoteca?</div>
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
            <input type="text" id="property_mortgagor" className="form-control" value={this.props.property_mortgagor} onChange={this.props.onChangePropertyMortgagor}/>
            <label htmlFor="property_mortgagor">Hipoteca a favor de</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">
            <input type="text" id="property_insurance_flg" className="form-control" value={this.props.property_insurance_flg} onChange={this.props.onChangePropertyInsuranceFlg}/>
            <label htmlFor="property_insurance_flg">Seguro</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-large">Fecha de último dividendo</div>
        </div>
        <div className="row">
          <div className="column col-small">
            <input type="text" id="property_last_payment_day" placeholder="DD" className="form-control" value={this.props.property_last_payment_day} onChange={this.props.onChangePropertyLastPaymentDay}/>
            <label htmlFor="property_last_payment_day">Día</label>
          </div>
          <div className="column col-small">
            <input type="text" id="property_last_payment_month" placeholder="MM" className="form-control" value={this.props.property_last_payment_month} onChange={this.props.onChangePropertyLastPaymentMonth}/>
            <label htmlFor="property_last_payment_month">Mes</label>
          </div>
          <div className="column col-small">
            <input type="text" id="property_last_payment_year" placeholder="AAAA" className="form-control" value={this.props.property_last_payment_year} onChange={this.props.onChangePropertyLastPaymentYear}/>
            <label htmlFor="property_last_payment_year">Año</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-medium">
            <input type="text" id="" className="form-control col-small" value={this.props.property_fee_paid} onChange={this.props.onChangePropertyFeePaid}/>
            <label htmlFor="">Cuotas pagadas</label>
          </div>
          <div className="column col-large">
            <input type="text" id="" className="form-control" value={this.props.property_debt_balance} onChange={this.props.onChangePropertyDebtBalance}/>
            <label htmlFor="">Saldo deuda</label>
          </div>
        </div>
        <div className="row">
          <div className="column col-medium">
            <input type="text" id="" className="form-control col-small" value={this.props.property_fee_totals} onChange={this.props.onChangePropertyFeeTotals}/>
            <label htmlFor="">Cuotas totales</label>
          </div>
          <div className="column col-large">
            <input type="text" id="" className="form-control" value={this.props.property_fee_monthly_payment} onChange={this.props.onChangePropertyFeeMonthlyPayment}/>
            <label htmlFor="">Pago mensual</label>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="column">¿Está arrendada?</div>
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
            <input type="text" id="property_rental_income" className="form-control" value={this.props.property_rental_income} onChange={this.props.onChangePropertyRentalIncome}/>
            <label htmlFor="property_rental_income">Arriendo obtenido</label>
          </div>
        </div>

      </form>
    </article>)

  }

}
