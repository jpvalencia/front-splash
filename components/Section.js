import React from 'react'
import Link from 'next/link'
import Session from '../components/session'
import {get, set, each} from 'lodash';
import axios from 'axios';
//import Project from './Project';
import PersonalData from './PersonalData';
import OccupationalData from './OccupationalData';
import PropertiesData from './PropertiesData';
import VehiclesData from './VehiclesData';
import InvestmentsData from './InvestmentsData';
import CompaniesData from './CompaniesData';
import LoansData from './LoansData';
import CreditsData from './CreditsData';
import SpouseData from './SpouseData';
import FamiliarGroupData from './FamiliarGroupData';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalData:{
        foid:"",
        name:"",
        last_name:"",
        mother_name:"",
        day_of_birthday:"",
        month_of_birthday:"",
        year_of_birthday:"",
        nationality:"",
        gender: "",
        marital_status:"",
        marital_regime:"",
        educational_level:"",
        degree:"",
        college:"",
        mobile_phone:"",
        user_email:"",
        server_email:"",
        country:"",
        state:"",
        city:"",
        city_2:"",//comuna
        street_name:"",
        street_number:"",
        department_number:"",
        home_ownership:"",
        monthly_payment:""
      }
      //projects: []
    }
  }
  /*
  componentDidMount() {
    const session = Session.getSession();
    this.setState({
      userData: get(session, 'userData'),
    })

    axios.get("/user/projects", {
        params:{
          email : get(session, 'userData.email')
        },
        headers: {
          authorization: get(session, 'token')
        }
    })
      .then((results) => {
        if(results.status === 200) {
          this.setState({
            projects: results.data,
          })
        }
      });

  }
*/
  handleChangePersonalDataFoid = e => this.setState({personalData:{foid: e.target.value}});
  handleChangePersonalDataName = e => this.setState({personalData:{name: e.target.value}});
  handleChangePersonalDataLastName = e => this.setState({personalData:{last_name: e.target.value}});
  handleChangePersonalDataMotherName = e => this.setState({personalData:{mother_name: e.target.value}});
  handleChangePersonalDataDayOfBirthday = e => this.setState({personalData:{day_of_birthday: e.target.value}});
  handleChangePersonalDataDayOfBirthday = e => this.setState({personalData:{month_of_birthday: e.target.value}});
  handleChangePersonalDataDayOfBirthday = e => this.setState({personalData:{year_of_birthday: e.target.value}});
  handleChangePersonalDataNationality = e => this.setState({personalData:{nationality: e.target.value}});
  handleChangePersonalDataGender = e => this.setState({personalData:{gender: e.target.value}});
  handleChangePersonalDataMaritalStatus = e => this.setState({personalData:{marital_status: e.target.value}});
  handleChangePersonalDataMaritalRegime = e => this.setState({personalData:{marital_regime: e.target.value}});
  handleChangePersonalDataEducationalLevel = e => this.setState({personalData:{educational_level: e.target.value}});
  handleChangePersonalDataDegree = e => this.setState({personalData:{degree: e.target.value}});
  handleChangePersonalDataCollege = e => this.setState({personalData:{college: e.target.value}});
  render(){
    /*
    let projects = []
    if(get(this.state, "projects").length > 0) {
      each(this.state.projects, (project) => {
        projects.push(<Project key={project.nombre_inmobiliaria} nombre_inmobiliaria = {project.nombre_inmobiliaria} nombre_proyecto =  {project.nombre_proyecto} nro_depto_casa={project.nro_depto_casa} valor={project.valor} />)
      })
    }
*/
    return (<section role="region">
      <PersonalData
        foid={this.state.personalData.foid}
        onChangeFoid={this.handleChangePersonalDataFoid}
        name={this.state.personalData.name}
        onChangeName={this.handleChangePersonalDataName}
        lastName={this.state.personalData.last_name}
        onChangeLastName={this.handleChangePersonalDataLastName}
        motherName={this.state.personalData.mother_name}
        onChangeMotherName={this.handleChangePersonalDataMotherName}
        dayOfBirthday={this.state.personalData.day_of_birthday}
        onChangeDayOfBirthday={this.handleChangePersonalDataDayOfBirthday}
        monthOfBirthday={this.state.personalData.month_of_birthday}
        onChangeMonthOfBirthday={this.handleChangePersonalDataMonthOfBirthday}
        yearOfBirthday={this.state.personalData.year_of_birthday}
        onChangeYearOfBirthday={this.handleChangePersonalDataYearOfBirthday}
        nationality={this.state.personalData.nationality}
        onChangeNationality={this.handleChangePersonalDataNationality}
        gender={this.state.personalData.gender}
        onChangeGender={this.handleChangePersonalDataGender}
        maritalStatus={this.state.personalData.marital_status}
        onChangeMaritalStatus={this.handleChangePersonalDataMaritalStatus}
        maritalRegime={this.state.personalData.marital_regime}
        onChangeMaritalRegime={this.handleChangePersonalDataMaritalRegime}
        educationalLevel={this.state.personalData.educationalLevel}
        onChangeEducationalLevel={this.handleChangePersonalDataEducationalLevel}
        degree={this.state.personalData.degree}
        onChangeDegree={this.handleChangePersonalDataDegree}
        college={this.state.personalData.college}
        onChangeCollege={this.handleChangePersonalDataCollege}
      />
      <OccupationalData/>
      <PropertiesData/>
      <VehiclesData/>
      <InvestmentsData/>
      <CompaniesData/>
      <LoansData/>
      <CreditsData/>
      <SpouseData/>
      <FamiliarGroupData/>
      <article role="button">
        <span>Enviar Cotizaciones</span>
        <span className="icon">+</span>
      </article>
    </section>)

  }

}
