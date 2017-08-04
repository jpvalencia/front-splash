import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <article role="form">
        <form action="" method="post">
          <h2>Cargas</h2>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control col-small" value={this.props.dependent_quantity} onChange={this.props.onChangeFamilyDependentQuantity}/>
              <label htmlFor="">Cantidad de dependientes</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.name} onChange={this.props.onChangeFamilyName}/>
              <label htmlFor="">Nombre</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.relationship} onChange={this.props.onChangeFamilyRelationship}/>
              <label htmlFor="">Parentesco</label>
            </div>
            <div className="column col-small">
              <input type="text" id="" className="form-control" value={this.props.age} onChange={this.props.onChangeFamilyAge}/>
              <label htmlFor="">Edad</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">Fecha de nacimiento</div>
          </div>

          <div className="row">
            <div className="column col-small">
              <input type="text" id="" placeholder="DD" className="form-control" value={this.props.day_of_birthday} onChange={this.props.onChangeFamilyDayOfBirthday}/>
              <label htmlFor="">Día</label>
            </div>
            <div className="column col-small">
              <input type="text" id="" placeholder="MM" className="form-control" value={this.props.month_of_birthday} onChange={this.props.onChangeFamilyMonthOfBirthday}/>
              <label htmlFor="">Mes</label>
            </div>
            <div className="column col-small">
              <input type="text" id="" placeholder="AAAA" className="form-control" value={this.props.year_of_birthday} onChange={this.props.onChangeFamilyYearOfBirthday}/>
              <label htmlFor="">Año</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <select id="" role="listbox" className="form-control" onChange={this.props.onChangeFamilyGender}>
                <option value="selecciona">Selecciona</option>
              </select>
              <label htmlFor="">Genero</label>
            </div>
          </div>

          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.activity} onChange={this.props.onChangeFamilyActivity}/>
              <label htmlFor="">Actividad</label>
            </div>
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.income} onChange={this.props.onChangeFamilyIncome}/>
              <label htmlFor="">Ingresos</label>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column">¿Pagas pensión alimenticia?</div>
          </div>
          <div className="row">
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-30" value=""/>
                <label htmlFor="radio-30">SI</label>
              </div>
            </div>
            <div className="column col-small">
              <div className="radio">
                <input type="radio" id="radio-31" value=""/>
                <label htmlFor="radio-31">NO</label>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="column col-large">
              <input type="text" id="" className="form-control" value={this.props.pension_ammount} onChange={this.props.onChangeFamilyPensionAmmount}/>
              <label htmlFor="">Monto de la pensión</label>
            </div>
          </div>

        </form>
      </article>)

  }

}
