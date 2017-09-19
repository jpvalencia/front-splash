import React from 'react';
import {each} from 'lodash';
import servicesHelper from './helpers/servicesFamily';
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

  deleteFamily(familyId) {
    servicesHelper.deleteFamily('/customer/information/family/', familyId)
    .then(()=> {
      this.getResume();
    })
  }

  getResume() {
    servicesHelper.getResume('/customer/information/resume/family/')
    .then((data) => {
      let trs = [];
      if(data.data.length > 0) {
        each(data.data, (family) => {
          trs.push(<tr key={family.family_id}><td scope="row">{family.family_name}</td>
          <td data-title="Parentesco" data-type="">{family.family_relationship}</td>
          <td data-title="Edad" data-type="">{family.family_age}</td>
          <td data-title="Género" data-type="">{family.family_gender}</td>
          <td data-title="Editar" data-type=""><div className="edit"></div></td>
          <td data-title="Eliminar" data-type=""><div className="delete" onClick={e => this.deleteFamily(family.family_id)}></div></td></tr>)
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
                  <th scope="col">Nombre</th>
                  <th scope="col">Parentesco</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Género</th>
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
