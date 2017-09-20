import React from 'react'
import Collapsible from 'react-collapsible';
import { each} from 'lodash';
import servicesHelper from './helpers/servicesVehicles';
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

  deleteVehicles(vehicleId) {
    servicesHelper.deleteVehicle('/customer/information/vehicles/', vehicleId)
    .then(()=> {
      this.getResume();
    })
  }

  getResume() {
    servicesHelper.getResume('/customer/information/resume/vehicles/')
    .then((data) => {
      let trs = [];
      if(data.data.length > 0) {
        each(data.data, (vehicle) => {
          trs.push(<tr key={vehicle.id}>
          <td scope="row">{vehicle.id}</td>
          <td data-title="Marca" data-type="">{vehicle.brand}</td>
          <td data-title="Modelo" data-type="">{vehicle.model}</td>
          <td data-title="Año" data-type="">{vehicle.year}</td>
          <td data-title="Editar" data-type=""><div className="edit"></div></td>
          <td data-title="Eliminar" data-type=""><div className="delete" onClick={e => this.deleteVehicles(vehicle.id)}></div></td></tr>)
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
              <th scope="col">Patente</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Año</th>
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
