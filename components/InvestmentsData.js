import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Inversiones</h2>

          <div className="row">
            <div className="column col-large">
              <select id="investment_type" role="listbox" className="form-control" onChange={this.props.onChangeInvestmentType}>
                <option value="selecciona">Selecciona</option>
                <option value="Depositio a plazo">Depositio a plazo</option>
                <option value="Fondos mutuos">Fondos mutuos</option>
                <option value="Ahorro">Ahorro</option>
                <option value="Acciones">Acciones</option>
                <option value="Otros">Otros</option>
              </select>
              <label htmlFor="investment_type">Tipo de inversión</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="investment_issuer" className="form-control" value={this.props.investment_issuer} onChange={this.props.onChangeInvestmentIssuer}/>
              <label htmlFor="investment_issuer">Institución emisora</label>
            </div>
            <div className="column col-large">
              <input type="text" id="investment_mortgagor_flg" className="form-control" value={this.props.investment_mortgagor_flg} onChange={this.props.onChangeInvestmentMortgagorFlg}/>
              <label htmlFor="investment_mortgagor_flg">Prenda</label>
            </div>
            <div className="column col-large">
              <input type="text" id="investment_value" className="form-control" value={this.props.investment_value} onChange={this.props.onChangeInvestmentValue}/>
              <label htmlFor="investment_value">Valor comercial</label>
            </div>
          </div>

        </form>
      </article>)

  }

}
