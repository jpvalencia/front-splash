import React from 'react'
import { each} from 'lodash';
import servicesHelper from './helpers/servicesCompanies';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trs:[]
    };
  }
  componentDidMount() {
    this.getResume();
  }

  deleteCompanies(companyId) {
    servicesHelper.deleteCompanies('/customer/information/companies/', companyId)
    .then(()=> {
      this.getResume();
    })
  }

  getResume() {
    servicesHelper.getResume('/customer/information/resume/companies/')
    .then((data) => {
      let trs = [];
      if(data.data.length > 0) {
        each(data.data, (company) => {
          trs.push(<tr key={company.id}>
          <td scope="row">{company.name}</td>
          <td data-title="RUT" data-type="">{company.id}</td>
          <td data-title="Giro" data-type="">{company.name}</td>
          <td data-title="Año Inicio" data-type="">{company.start_dt}</td>
          <td data-title="Editar" data-type=""><div className="edit"></div></td>
          <td data-title="Eliminar" data-type=""><div className="delete" onClick={e => this.deleteCompanies(company.id)}></div></td></tr>)
        })
      }
      this.setState({trs});
    });
  }

  render(){

    return (
      <div className="row">
        <table cellPadding="0" cellSpacing="0" className="responsive-table">
          <thead>
            <tr>
              <th scope="col">Nombre sociedad</th>
              <th scope="col">RUT</th>
              <th scope="col">Giro</th>
              <th scope="col">Año inicio</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trs}
          </tbody>
        </table>
      </div>)
  }

}
