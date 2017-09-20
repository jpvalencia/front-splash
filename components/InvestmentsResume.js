import React from 'react'
import { each} from 'lodash';
import servicesHelper from './helpers/servicesInvestments';
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

  deleteInvestments(investmentId) {
    servicesHelper.deleteInvestments('/customer/information/investments/', investmentId)
    .then(()=> {
      this.getResume();
    })
  }

  getResume() {
    servicesHelper.getResume('/customer/information/resume/investments/')
    .then((data) => {
      let trs = [];
      if(data.data.length > 0) {
        each(data.data, (investment) => {
          trs.push(<tr key={investment.id}>
          <td scope="row">{investment.type}</td>
          <td data-title="Institución" data-type="">{investment.issuer}</td>
          <td data-title="Prenda" data-type=""></td>
          <td data-title="Valor" data-type="">{investment.value}</td>
          <td data-title="Editar" data-type=""><div className="edit"></div></td>
          <td data-title="Eliminar" data-type=""><div className="delete" onClick={e => this.deleteInvestments(investment.id)}></div></td></tr>)
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
              <th scope="col">Tipo de inversión</th>
              <th scope="col">Institución</th>
              <th scope="col">Prenda</th>
              <th scope="col">Valor</th>
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
