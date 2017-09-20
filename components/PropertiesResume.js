import React from 'react';
import {each} from 'lodash';
import servicesHelper from './helpers/servicesProperties';
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

  deleteProperties(propertyId) {
    servicesHelper.deleteProperty('/customer/information/properties/', propertyId)
    .then(()=> {
      this.getResume();
    })
  }

  getResume() {
    servicesHelper.getResume('/customer/information/resume/properties/')
    .then((data) => {
      let trs = [];
      if(data.data.length > 0) {
        each(data.data, (property) => {
          trs.push(<tr key={property.property_id}><td scope="row">{property.address}</td>
          <td data-title="Número" data-type=""></td>
          <td data-title="Número de Rol" data-type="">{property.property_id}</td>
          <td data-title="Tipo propiedad" data-type="">{property.property_type}</td>
          <td data-title="Editar" data-type=""><div className="edit"></div></td>
          <td data-title="Eliminar" data-type=""><div className="delete" onClick={e => this.deleteProperties(property.property_id)}></div></td></tr>)
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
                <th scope="col">Calle</th>
                <th scope="col">Número</th>
                <th scope="col">Número de Rol</th>
                <th scope="col">Tipo de propiedad</th>
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
