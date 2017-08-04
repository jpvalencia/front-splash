import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Sociedades</h2>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="company_name" className="form-control" value={this.props.company_name} onChange={this.props.onChangeCompanyName}/>
              <label htmlFor="company_name">Nombre sociedad</label>
            </div>
            <div className="column col-large">
              <input type="text" id="company_id" placeholder="12345678-5" className="form-control" value={this.props.company_id} onChange={this.props.onChangeCompanyId}/>
              <label htmlFor="company_id">RUT</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="company_industry" className="form-control" value={this.props.company_industry} onChange={this.props.onChangeCompanyIndustry}/>
              <label htmlFor="company_industry">Giro</label>
            </div>
            <div className="column col-large">
              <input type="text" id="company_perc_ownership" className="form-control" value={this.props.company_perc_ownership} onChange={this.props.onChangeCompanyPercOwnership}/>
              <label htmlFor="company_perc_ownership">Porcentaje participación</label>
            </div>
            <div className="column col-large">
              <input type="text" id="company_value" className="form-control" value={this.props.company_value} onChange={this.props.onChangeCompanyValue}/>
              <label htmlFor="company_value">Valor inversión</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="company_start_dt" className="form-control" value={this.props.company_start_dt} onChange={this.props.onChangeCompanyStartDt}/>
              <label htmlFor="company_start_dt">Año inicio</label>
            </div>
            <div className="column col-large">
              <input type="text" id="company_notaria" className="form-control" value={this.props.company_notaria} onChange={this.props.onChangeCompanyNotaria}/>
              <label htmlFor="company_notaria">Notaría</label>
            </div>
            <div className="column col-large">
              <input type="text" id="company_net_worth" className="form-control" value={this.props.company_net_worth} onChange={this.props.onChangeCompanyNetWorth}/>
              <label htmlFor="company_net_worth">Patrimonio</label>
            </div>
          </div>

        </form>
      </article>
    )

  }

}
