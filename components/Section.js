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
import BankingData from './BankingData';
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
      },
      occupationalData:{
        employer_name:"",
        employer_id:"",
        employer_address:"",
        industry:"",
        job_title:"",
        job_senority:"",
        job_entry_year:"",
        job_entry_month:"",
        job_entry_day:"",
        net_income:"",
        annualized_variable_bonus:"",
        previous_employer:"",
        previous_job_title:"",
        previous_net_income:"",
        chief_name:"",
        chief_job_title:""
      },
      propertiesData: {
        property_id:"",
        property_type:"",
        property_value:"",
        property_fiscal_value:"",
        property_perc_ownership:"",
        property_surface_sqt:"",
        property_address:"",
        property_city_2:"",
        property_mortgagor:"",
        property_insurance_flg:"",
        property_last_payment_day:"",
        property_last_payment_month:"",
        property_last_payment_year:"",
        property_fee_paid:"",
        property_debt_balance:"",
        property_fee_totals:"",
        property_fee_monthly_payment:"",
        property_rental_income:""
      },
      vehicles: {
        vehicle_id:"",
        vehicle_type:"",
        vehicle_brand:"",
        vehicle_model:"",
        vehicle_year:"",
        vehicle_value:"",
        vehicle_insurance_flg:"",
        vehicle_mortgagor_flg:"",
        vehicle_fee_unpaid:"",
        vehicle_monthly_payment:""
      },
      investments:{
        investment_type:"",
        investment_issuer:"",
        investment_mortgagor_flg:"",
        investment_value:""
      },
      companies: {
        company_name:"",
        company_id:"",
        company_industry:"",
        company_perc_ownership:"",
        company_value:"",
        company_start_dt:"",
        company_notaria:"",
        company_net_worth:""
      },
      banking:{
        bank_name:"",
        bank_office:"",
        bank_account_number:"",
        loan_warranty_type:"",
        loan_expire_dt:"",
        loan_fees_paid:"",
        loan_monthly_payment:"",
        loan_total_fees:"",
        loan_balance_debt:"",
        credit_used_quota:"",
        credit_line_ammount:"",
        credit_monthly_payment:"",
        credit_expire_dt:"",
        credit_currency:"",
        credit_card_type:"",
        credit_payments_done:"",
        credit_line_quota:"",
        credit_used_ammount:""
      },
      spouse: {
        spouse_rut:"",
        spouse_name:"",
        spouse_last_name:"",
        spouse_mother_name:"",
        spouse_day_of_birthday:"",
        spouse_month_of_birthday:"",
        spouse_year_of_birthday:"",
        spouse_gender:"",
        spouse_nationality:"",
        spouse_phone:"",
        spouse_email:"",
        spouse_degree:"",
        spouse_educational_level:"",
        spouse_activity:"",
        spouse_activity_type:"",
        spouse_net_income:"",
        spouse_init_activity_day:"",
        spouse_init_activity_month:"",
        spouse_init_activity_year:"",
        spouse_job_init_day:"",
        spouse_job_init_month:"",
        spouse_job_init_year:"",
        spouse_employer_name:"",
        spouse_employer_rut:"",
        spouse_employer_industry:"",
        spouse_employer_address:"",
        spouse_employer_city2:"",
        spouse_employer_city:"",
        spouse_employer_state:"",
        spouse_employer_phone:""
      },
      familiarGroup : {
        dependent_quantity:"",
        name:"",
        relationship:"",
        age:"",
        day_of_birthday:"",
        month_of_birthday:"",
        year_of_birthday:"",
        gender:"",
        activity:"",
        income:"",
        pension_ammount:""
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
setStateData  = (key, field, event) => {
  let state = this.state;
  state[key][field] = event.target.value
  this.setState(state);
}
  handleChangePersonalDataFoid = (e) => this.setStateData("personalData", "foid", e)
  handleChangePersonalDataName = (e) => this.setStateData("personalData", "name", e)
  handleChangePersonalDataLastName = e => this.setStateData("personalData", "last_name", e)
  handleChangePersonalDataMotherName = e => this.setStateData("personalData", "mother_name", e)
  handleChangePersonalDataDayOfBirthday = e => this.setStateData("personalData", "day_of_birthday", e)
  handleChangePersonalDataMonthOfBirthday = e => this.setStateData("personalData", "month_of_birthday", e)
  handleChangePersonalDataYearOfBirthday = e => this.setStateData("personalData", "year_of_birthday", e)
  handleChangePersonalDataNationality = e => this.setStateData("personalData", "nationality", e)
  handleChangePersonalDataGender = e => this.setStateData("personalData", "gender", e)
  handleChangePersonalDataMaritalStatus = e => this.setStateData("personalData", "marital_status", e)
  handleChangePersonalDataMaritalRegime = e => this.setStateData("personalData", "marital_regime", e)
  handleChangePersonalDataEducationalLevel = e => this.setStateData("personalData", "educational_level", e)
  handleChangePersonalDataDegree = e => this.setStateData("personalData", "degree", e)
  handleChangePersonalDataCollege = e => this.setStateData("personalData", "college", e)
  handleChangePersonalDataMobilePhone = e => this.setStateData("personalData", "mobile_phone", e)
  handleChangePersonalDataUserEmail = e => this.setStateData("personalData", "user_email", e)
  handleChangePersonalDataServerEmail = e => this.setStateData("personalData", "server_email", e)
  handleChangePersonalDataCountry = e => this.setStateData("personalData", "country", e)
  handleChangePersonalDataState = e => this.setStateData("personalData", "state", e)
  handleChangePersonalDataCity = e => this.setStateData("personalData", "city", e)
  handleChangePersonalDataCity2 = e => this.setStateData("personalData", "city_2", e)
  handleChangePersonalDataStreetName = e => this.setStateData("personalData", "street_name", e)
  handleChangePersonalDataStreetNumber = e => this.setStateData("personalData", "street_number", e)
  handleChangePersonalDataDepartmentNumber = e => this.setStateData("department_number", "gender", e)
  handleChangePersonalDataHomeOwnership = e => this.setStateData("personalData", "home_ownership", e)
  handleChangePersonalDataMonthlyPayment = e => this.setStateData("personalData", "monthly_payment", e)

  handleChangeOccupationalDataEmployerName = e => this.setStateData("occupationalData", "employer_name", e)
  handleChangeOccupationalDataEmployerId = e => this.setStateData("occupationalData", "employer_id", e)
  handleChangeOccupationalDataEmployerAddress = e => this.setStateData("occupationalData", "employer_address", e)
  handleChangeOccupationalDataIndustry = e => this.setStateData("occupationalData", "industry", e)
  handleChangeOccupationalDataJobSenority = e => this.setStateData("occupationalData", "job_senority", e)
  handleChangeOccupationalDataJobTitle = e => this.setStateData("occupationalData", "job_title", e)
  handleChangeOccupationalDataJobEntryYear = e => this.setStateData("occupationalData", "job_entry_year", e)
  handleChangeOccupationalDataJobEntryMonth = e => this.setStateData("occupationalData", "job_entry_month", e)
  handleChangeOccupationalDataJobEntryDay = e => this.setStateData("occupationalData", "job_entry_day", e)
  handleChangeOccupationalDataNetIncome = e => this.setStateData("occupationalData", "net_income", e)
  handleChangeOccupationalDataAnnualizedVariableBonus = e => this.setStateData("occupationalData", "annualized_variable_bonus", e)
  handleChangeOccupationalDataPreviousEmployer = e => this.setStateData("occupationalData", "previous_employer", e)
  handleChangeOccupationalDataPreviousJobTitle = e => this.setStateData("occupationalData", "previous_job_title", e)
  handleChangeOccupationalDataPreviousNetIncome = e => this.setStateData("occupationalData", "previous_net_income", e)
  handleChangeOccupationalDataChiefName = e => this.setStateData("occupationalData", "chief_name", e)
  handleChangeOccupationalDataChiefJobTitle = e => this.setStateData("occupationalData", "chief_job_title", e)

  handleChangePropertiesDataPropertyId = e => this.setStateData("propertiesData", "property_id", e)
  handleChangePropertiesDataPropertyType = e => this.setStateData("propertiesData", "property_type", e)
  handleChangePropertiesDataPropertyValue = e => this.setStateData("propertiesData", "property_value", e)
  handleChangePropertiesDataPropertyFiscalValue = e => this.setStateData("propertiesData", "property_fiscal_value", e)
  handleChangePropertiesDataPropertyPercOwnership = e => this.setStateData("propertiesData", "property_perc_ownership", e)
  handleChangePropertiesDataPropertySurfaceSqt = e => this.setStateData("propertiesData", "property_surface_sqt", e)
  handleChangePropertiesDataPropertyAddress = e => this.setStateData("propertiesData", "property_address", e)
  handleChangePropertiesDataPropertyCity2 = e => this.setStateData("propertiesData", "property_city_2", e)
  handleChangePropertiesDataPropertyMortgagor = e => this.setStateData("propertiesData", "property_mortgagor", e)
  handleChangePropertiesDataPropertyInsuranceFlg = e => this.setStateData("propertiesData", "property_insurance_flg", e)
  handleChangePropertiesDataPropertyLastPaymentDay = e => this.setStateData("propertiesData", "property_last_payment_day", e)
  handleChangePropertiesDataPropertyLastPaymentMonth = e => this.setStateData("propertiesData", "property_last_payment_month", e)
  handleChangePropertiesDataPropertyLastPaymentYear = e => this.setStateData("propertiesData", "property_last_payment_year", e)
  handleChangePropertiesDataPropertyFeePaid = e => this.setStateData("propertiesData", "property_fee_paid", e)
  handleChangePropertiesDataPropertyDebtBalance = e => this.setStateData("propertiesData", "property_debt_balance", e)
  handleChangePropertiesDataPropertyFeeTotals = e => this.setStateData("propertiesData", "property_fee_totals", e)
  handleChangePropertiesDataPropertyFeeMonthlyPayment = e => this.setStateData("propertiesData", "property_fee_monthly_payment", e)
  handleChangePropertiesDataPropertyRentalIncome = e => this.setStateData("propertiesData", "property_rental_income", e)

  handleChangeVehicleDataVehicleId = e => this.setStateData("vehicles", "vehicle_id", e)
  handleChangeVehicleDataVehicleType = e => this.setStateData("vehicles", "vehicle_type", e)
  handleChangeVehicleDataVehicleBrand = e => this.setStateData("vehicles", "vehicle_brand", e)
  handleChangeVehicleDataVehicleModel = e => this.setStateData("vehicles", "vehicle_model", e)
  handleChangeVehicleDataVehicleYear = e => this.setStateData("vehicles", "vehicle_year", e)
  handleChangeVehicleDataVehicleValue = e => this.setStateData("vehicles", "vehicle_value", e)
  handleChangeVehicleDataVehicleInsuranceFlg = e => this.setStateData("vehicles", "vehicle_insurance_flg", e)
  handleChangeVehicleDataVehicleMortgagorFlg = e => this.setStateData("vehicles", "vehicle_mortgagor_flg", e)
  handleChangeVehicleDataVehicleFeeUnpaid = e => this.setStateData("vehicles", "vehicle_fee_unpaid", e)
  handleChangeVehicleDataVehicleMonthlyPayment = e => this.setStateData("vehicles", "vehicle_monthly_payment", e)

  handleChangeInvestmentDataInvestmentType = e => this.setStateData("investments", "investment_type", e)
  handleChangeInvestmentDataInvestmentIssuer = e => this.setStateData("investments", "investment_issuer", e)
  handleChangeInvestmentDataInvestmentMortgagorFlg = e => this.setStateData("investments", "investment_mortgagor_flg", e)
  handleChangeInvestmentDataInvestmentValue = e => this.setStateData("investments", "investment_value", e)

  handleChangeCompaniesDataCompanyId = e => this.setStateData("companies", "company_id", e)
  handleChangeCompaniesDataCompanyName = e => this.setStateData("companies", "company_name", e)
  handleChangeCompaniesDataCompanyIndustry = e => this.setStateData("companies", "company_industry", e)
  handleChangeCompaniesDataCompanyPercOwnership = e => this.setStateData("companies", "company_perc_ownership", e)
  handleChangeCompaniesDataCompanyValue = e => this.setStateData("companies", "company_value", e)
  handleChangeCompaniesDataCompanyStartDt = e => this.setStateData("companies", "company_start_dt", e)
  handleChangeCompaniesDataCompanyNotaria = e => this.setStateData("companies", "company_notaria", e)
  handleChangeCompaniesDataCompanyNetWorth = e => this.setStateData("companies", "company_net_worth", e)

  handleChangeBankingDataBankName = e => this.setStateData("banking", "bank_name", e)
  handleChangeBankingDataBankOffice = e => this.setStateData("banking", "bank_office", e)
  handleChangeBankingDataBankAccountNumber = e => this.setStateData("banking", "bank_account_number", e)
  handleChangeBankingDataLoanWarrantyType = e => this.setStateData("banking", "loan_warranty_type", e)
  handleChangeBankingDataLoanExpireDt = e => this.setStateData("banking", "loan_expire_dt", e)
  handleChangeBankingDataLoanFeesPaid = e => this.setStateData("banking", "loan_fees_paid", e)
  handleChangeBankingDataLoanMonthlyPayment = e => this.setStateData("banking", "loan_monthly_payment", e)
  handleChangeBankingDataLoanTotalFees = e => this.setStateData("banking", "loan_total_fees", e)
  handleChangeBankingDataLoanBalanceDebt = e => this.setStateData("banking", "loan_balance_debt", e)
  handleChangeBankingDataCreditUsedQuota = e => this.setStateData("banking", "credit_used_quota", e)
  handleChangeBankingDataCreditLineAmmount = e => this.setStateData("banking", "credit_line_ammount", e)
  handleChangeBankingDataCreditMonthlyPayment = e => this.setStateData("banking", "credit_monthly_payment", e)
  handleChangeBankingDataCreditExpireDt = e => this.setStateData("banking", "credit_expire_dt", e)
  handleChangeBankingDataCreditCurrency = e => this.setStateData("banking", "credit_currency", e)
  handleChangeBankingDataCreditCardType = e => this.setStateData("banking", "credit_card_type", e)
  handleChangeBankingDataCreditPaymentsDone = e => this.setStateData("banking", "credit_payments_done", e)
  handleChangeBankingDataCreditLineQuota = e => this.setStateData("banking", "credit_line_quota", e)
  handleChangeBankingDataCreditUsedAmmount = e => this.setStateData("banking", "credit_used_ammount", e)

  handleChangeSpouseRut = e => this.setStateData("spouse", "spouse_rut", e)
  handleChangeSpouseName = e => this.setStateData("spouse", "spouse_name", e)
  handleChangeSpouseLastName = e => this.setStateData("spouse", "spouse_last_name", e)
  handleChangeSpouseMotherName = e => this.setStateData("spouse", "spouse_mother_name", e)
  handleChangeSpouseDayOfBirthday = e => this.setStateData("spouse", "spouse_day_of_birthday", e)
  handleChangeSpouseMonthOfBirthday = e => this.setStateData("spouse", "spouse_month_of_birthday", e)
  handleChangeSpouseYearOfBirthday = e => this.setStateData("spouse", "spouse_year_of_birthday", e)
  handleChangeSpouseGender = e => this.setStateData("spouse", "spouse_gender", e)
  handleChangeSpouseNationality = e => this.setStateData("spouse", "spouse_nationality", e)
  handleChangeSpousePhone = e => this.setStateData("spouse", "spouse_phone", e)
  handleChangeSpouseEmail = e => this.setStateData("spouse", "spouse_email", e)
  handleChangeSpouseDegree = e => this.setStateData("spouse", "spouse_degree", e)
  handleChangeSpouseEducationalLevel = e => this.setStateData("spouse", "spouse_educational_level", e)
  handleChangeSpouseActivity = e => this.setStateData("spouse", "spouse_activity", e)
  handleChangeSpouseNetIncome = e => this.setStateData("spouse", "spouse_net_income", e)
  handleChangeSpouseInitActivityDay = e => this.setStateData("spouse", "spouse_init_activity_day", e)
  handleChangeSpouseInitActivityMonth = e => this.setStateData("spouse", "spouse_init_activity_month", e)
  handleChangeSpouseInitActivityYear = e => this.setStateData("spouse", "spouse_init_activity_year", e)
  handleChangeSpouseJobInitDay = e => this.setStateData("spouse", "spouse_job_init_day", e)
  handleChangeSpouseJobInitYear = e => this.setStateData("spouse", "spouse_job_init_year", e)
  handleChangeSpouseJobInitMonth = e => this.setStateData("spouse", "spouse_job_init_month", e)
  handleChangeSpouseEmployerName = e => this.setStateData("spouse", "spouse_employer_name", e)
  handleChangeSpouseEmployerRut = e => this.setStateData("spouse", "spouse_employer_rut", e)
  handleChangeSpouseEmployerIndustry = e => this.setStateData("spouse", "spouse_employer_industry", e)
  handleChangeSpouseEmployerAddress = e => this.setStateData("spouse", "spouse_employer_address", e)
  handleChangeSpouseEmployerCity2 = e => this.setStateData("spouse", "spouse_employer_city2", e)
  handleChangeSpouseEmployerCity = e => this.setStateData("spouse", "spouse_employer_city", e)
  handleChangeSpouseEmployerState = e => this.setStateData("spouse", "spouse_employer_state", e)
  handleChangeSpouseEmployerPhone = e => this.setStateData("spouse", "spouse_employer_phone", e)
  handleChangeSpouseActivityType = e => this.setStateData("spouse", "spouse_activity_type", e)

  handleChangeFamiliarGroupDependentQuantity = e => this.setStateData("familiarGroup", "dependent_quantity", e)
  handleChangeFamiliarGroupName = e => this.setStateData("familiarGroup", "name", e)
  handleChangeFamiliarGroupRelationship = e => this.setStateData("familiarGroup", "relationship", e)
  handleChangeFamiliarGroupAge = e => this.setStateData("familiarGroup", "age", e)
  handleChangeFamiliarGroupDayOfBirthday = e => this.setStateData("familiarGroup", "day_of_birthday", e)
  handleChangeFamiliarGroupMonthOfBirthday = e => this.setStateData("familiarGroup", "month_of_birthday", e)
  handleChangeFamiliarGroupYearOfBirthday = e => this.setStateData("familiarGroup", "year_of_birthday", e)
  handleChangeFamiliarGroupGender = e => this.setStateData("familiarGroup", "gender", e)
  handleChangeFamiliarGroupActivity = e => this.setStateData("familiarGroup", "activity", e)
  handleChangeFamiliarGroupIncome = e => this.setStateData("familiarGroup", "income", e)
  handleChangeFamiliarGroupPensionAmmount = e => this.setStateData("familiarGroup", "pension_ammount", e)


  handleSubmit = (event) => {
      const session = Session.getSession();
      this.setState({
        userData: get(session, 'userData'),
      })

      axios.put("/user/update",
        {data:this.state},
        {
          params:{
            email : get(session, 'userData.email')
          },
          headers: {
            authorization: get(session, 'token')
          }
      })
      .then((results) => {
        if(results.status === 200) {
          alert("tuto guardado")
        }
      })
      .catch((e)=>{
        console.log("error guardando los datos", e)
      });
  }

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
    <button type="submit" className="btn-flat first-level first-negative" onClick = {this.handleSubmit}>Guardar</button>

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
        handleChangePersonalDataCollege={this.handleChangePersonalDataCollege}
        mobile_phone={this.state.personalData.mobile_phone}
        onChangeMobilePhone={this.handleChangePersonalDataMobilePhone}
        user_email={this.state.personalData.user_email}
        onChangeUserEmail={this.handleChangePersonalDataUserEmail}
        server_email={this.state.personalData.server_email}
        onChangeServerEmail={this.handleChangePersonalDataServerEmail}
        country={this.state.personalData.country}
        onChangeCountry={this.handleChangePersonalDataCountry}
        state={this.state.personalData.state}
        onChangeState={this.handleChangePersonalDataState}
        city={this.state.personalData.city}
        onChangeCity={this.handleChangePersonalDataCity}
        city_2={this.state.personalData.city_2}
        onChangeCity2={this.handleChangePersonalDataCity2}
        street_name={this.state.personalData.street_name}
        onChangeStreetName={this.handleChangePersonalDataStreetName}
        street_number={this.state.personalData.street_number}
        onChangeStreetNumber={this.handleChangePersonalDataStreetNumber}
        department_number={this.state.personalData.department_number}
        onChangeDepartmentNumer={this.handleChangePersonalDataDepartmentNumer}
        home_ownership={this.state.personalData.home_ownership}
        onChangeHomeOwnership={this.handleChangePersonalDataHomeOwnership}
        monthly_payment={this.state.personalData.monthly_payment}
        onChangeMonthlyPayment={this.handleChangePersonalDataMonthlyPayment}
      />
      <OccupationalData
        employer_name={this.state.occupationalData.employer_name}
        onChangeEmployerName={this.handleChangeOccupationalDataEmployerName}
        onChangeEmployerId={this.handleChangeOccupationalDataEmployerId}
        employer_address={this.state.occupationalData.employer_address}
        onChangeEmployerAddress={this.handleChangeOccupationalDataEmployerAddress}
        industry={this.state.occupationalData.industry}
        onChangeIndustry={this.handleChangeOccupationalDataIndustry}
        job_title={this.state.occupationalData.job_title}
        onChangeJobTitle={this.handleChangeOccupationalDataJobTitle}
        job_senority={this.state.occupationalData.job_senority}
        onChangeJobSenority={this.handleChangeOccupationalDataJobSenority}
        job_entry_year={this.state.occupationalData.job_entry_year}
        onChangeJobEntryYear={this.handleChangeOccupationalDataJobEntryYear}
        job_entry_month={this.state.occupationalData.job_entry_month}
        onChangeJobEntryMonth={this.handleChangeOccupationalDataJobEntryMonth}
        job_entry_day={this.state.occupationalData.job_entry_day}
        onChangeJobEntryDay={this.handleChangeOccupationalDataJobEntryDay}
        net_income={this.state.occupationalData.net_income}
        onChangeNetIncome={this.handleChangeOccupationalDataNetIncome}
        annualized_variable_bonus={this.state.occupationalData.annualized_variable_bonus}
        onChangeAnnualizedVariableBonus={this.handleChangeOccupationalDataAnnualizedVariableBonus}
        previous_employer={this.state.occupationalData.previous_employer}
        onChangePreviousEmployer={this.handleChangeOccupationalDataPreviousEmployer}
        previous_job_title={this.state.occupationalData.previous_job_title}
        onChangePreviousJobTitle={this.handleChangeOccupationalDataPreviousJobTitle}
        previous_net_income={this.state.occupationalData.previous_net_income}
        onChangePreviousNetIncome={this.handleChangeOccupationalDataPreviousNetIncome}
        chief_name={this.state.occupationalData.chief_name}
        onChangeChiefName={this.handleChangeOccupationalDataChiefName}
        chief_job_title={this.state.occupationalData.chief_job_title}
        onChangeChiefJobTitle={this.handleChangeOccupationalDataChiefJobTitle}
      />
      <PropertiesData
        property_id={this.state.propertiesData.property_id}
        onChangePropertyId={this.handleChangePropertiesDataPropertyId}
        property_type={this.state.propertiesData.property_type}
        onChangePropertyType={this.handleChangePropertiesDataPropertyType}
        property_value={this.state.propertiesData.property_value}
        onChangePropertyValue={this.handleChangePropertiesDataPropertyValue}
        property_fiscal_value={this.state.propertiesData.property_fiscal_value}
        onChangePropertyFiscalValue={this.handleChangePropertiesDataPropertyFiscalValue}
        property_perc_ownership={this.state.propertiesData.property_perc_ownership}
        onChangePropertyPercOwnership={this.handleChangePropertiesDataPropertyPercOwnership}
        property_surface_sqt={this.state.propertiesData.property_surface_sqt}
        onChangePropertySurfaceSqt={this.handleChangePropertiesDataPropertySurfaceSqt}
        property_address={this.state.propertiesData.property_address}
        onChangePropertyAddress={this.handleChangePropertiesDataPropertyAddress}
        property_city_2={this.state.propertiesData.property_city_2}
        onChangePropertyCity2={this.handleChangePropertiesDataPropertyCity2}
        property_mortgagor={this.state.propertiesData.property_mortgagor}
        onChangePropertyMortgagor={this.handleChangePropertiesDataPropertyMortgagor}
        property_insurance_flg={this.state.propertiesData.property_insurance_flg}
        onChangePropertyInsuranceFlg={this.handleChangePropertiesDataPropertyInsuranceFlg}
        property_last_payment_day={this.state.propertiesData.property_last_payment_day}
        onChangePropertyLastPaymentDay={this.handleChangePropertiesDataPropertyLastPaymentDay}
        property_last_payment_month={this.state.propertiesData.property_last_payment_month}
        onChangePropertyLastPaymentMonth={this.handleChangePropertiesDataPropertyLastPaymentMonth}
        property_last_payment_year={this.state.propertiesData.property_last_payment_year}
        onChangePropertyLastPaymentYear={this.handleChangePropertiesDataPropertyLastPaymentYear}
        property_fee_paid={this.state.propertiesData.property_fee_paid}
        onChangePropertyFeePaid={this.handleChangePropertiesDataPropertyFeePaid}
        property_debt_balance={this.state.propertiesData.property_debt_balance}
        onChangePropertyDebtBalance={this.handleChangePropertiesDataPropertyDebtBalance}
        property_fee_totals={this.state.propertiesData.property_fee_totals}
        onChangePropertyFeeTotals={this.handleChangePropertiesDataPropertyFeeTotals}
        property_fee_monthly_payment={this.state.propertiesData.property_fee_monthly_payment}
        onChangePropertyFeeMonthlyPayment={this.handleChangePropertiesDataPropertyFeeMonthlyPayment}
        property_rental_income={this.state.propertiesData.property_rental_income}
        onChangePropertyRentalIncome={this.handleChangePropertiesDataPropertyRentalIncome}

      />

      <VehiclesData
        vehicle_id={this.state.vehicles.vehicle_id}
        onChangeVehicleId={this.handleChangeVehicleDataVehicleId}
        vehicle_type={this.state.vehicles.vehicle_type}
        onChangeVehicleType = {this.handleChangeVehicleDataVehicleType}
        vehicle_brand={this.state.vehicles.vehicle_brand}
        onChangeVehicleBrand={this.handleChangeVehicleDataVehicleBrand}
        vehicle_model={this.state.vehicles.vehicle_model}
        onChangeVehicleModel={this.handleChangeVehicleDataVehicleModel}
        vehicle_year={this.state.vehicles.vehicle_year}
        onChangeVehicleYear={this.handleChangeVehicleDataVehicleYear}
        vehicle_value={this.state.vehicles.vehicle_value}
        onChangeVehicleValue={this.handleChangeVehicleDataVehicleValue}
        vehicle_insurance_flg={this.state.vehicles.vehicle_insurance_flg}
        onChangeVehicleInsuranceFlg={this.handleChangeVehicleDataVehicleInsuranceFlg}
        vehicle_mortgagor_flg={this.state.vehicles.vehicle_mortgagor_flg}
        onChangeVehicleMortgagorFlg={this.handleChangeVehicleDataVehicleMortgagorFlg}
        vehicle_fee_unpaid={this.state.vehicles.vehicle_fee_unpaid}
        onChangeVehicleFeeUnpaid={this.handleChangeVehicleDataVehicleFeeUnpaid}
        vehicle_monthly_payment={this.state.vehicles.vehicle_monthly_payment}
        onChangeVehicleIdMonthlyPayment={this.handleChangeVehicleDataVehicleMonthlyPayment}
      />
      <InvestmentsData
        investment_type={this.state.investments.investment_type}
        onChangeInvestmentType={this.handleChangeInvestmentDataInvestmentType}
        investment_issuer={this.state.investments.investment_issuer}
        onChangeInvestmentIssuer={this.handleChangeInvestmentDataInvestmentIssuer}
        investment_mortgagor_flg={this.state.investments.investment_mortgagor_flg}
        onChangeInvestmentMortgagorFlg={this.handleChangeInvestmentDataInvestmentMortgagorFlg}
        investment_value={this.state.investments.investment_value}
        onChangeInvestmentValue={this.handleChangeInvestmentDataInvestmentValue}
      />

      <CompaniesData
        company_id={this.state.companies.company_id}
        onChangeCompanyId={this.handleChangeCompaniesDataCompanyId}
        company_name={this.state.companies.company_name}
        onChangeCompanyName={this.handleChangeCompaniesDataCompanyName}
        company_industry={this.state.companies.company_industry}
        onChangeCompanyIndustry={this.handleChangeCompaniesDataCompanyIndustry}
        company_perc_ownership={this.state.companies.company_perc_ownership}
        onChangeCompanyPercOwnership={this.handleChangeCompaniesDataCompanyPercOwnership}
        company_value={this.state.companies.company_value}
        onChangeCompanyValue={this.handleChangeCompaniesDataCompanyValue}
        company_start_dt={this.state.companies.company_start_dt}
        onChangeCompanyStartDt={this.handleChangeCompaniesDataCompanyStartDt}
        company_notaria={this.state.companies.company_notaria}
        onChangeCompanyNotaria={this.handleChangeCompaniesDataCompanyNotaria}
        company_net_worth={this.state.companies.company_net_worth}
        onChangeCompanyNetWorth={this.handleChangeCompaniesDataCompanyNetWorth}
      />

      <BankingData
        bank_name={this.state.companies.bank_name}
        onChangeBankName={this.handleChangeBankingDataBankName}
        bank_office={this.state.companies.bank_office}
        onChangeBankOffice={this.handleChangeBankingDataBankOffice}
        bank_account_number={this.state.companies.bank_account_number}
        onChangeBankAccountNumber={this.handleChangeBankingDataBankAccountNumber}
        loan_warranty_type={this.state.companies.loan_warranty_type}
        onChangeLoanWarrantyType={this.handleChangeBankingDataLoanWarrantyType}
        loan_expire_dt={this.state.companies.loan_expire_dt}
        onChangeLoanExpireDt={this.handleChangeBankingDataLoanExpireDt}
        loan_fees_paid={this.state.companies.loan_fees_paid}
        onChangeLoanFeesPaid={this.handleChangeBankingDataLoanFeesPaid}
        loan_monthly_payment={this.state.companies.loan_monthly_payment}
        onChangeLoanMonthlyPayment={this.handleChangeBankingDataLoanMonthlyPayment}
        loan_total_fees={this.state.companies.loan_total_fees}
        onChangeLoanTotalFees={this.handleChangeBankingDataLoanTotalFees}
        loan_balance_debt={this.state.companies.loan_balance_debt}
        onChangeLoanBalanceDebt={this.handleChangeBankingDataLoanBalanceDebt}
        credit_used_quota={this.state.companies.credit_used_quota}
        onChangeCreditUsedQuota={this.handleChangeBankingDataCreditUsedQuota}
        credit_line_ammount={this.state.companies.credit_line_amount}
        onChangeCreditLineAmmount={this.handleChangeBankingDataCreditLineAmmount}
        credit_monthly_payment={this.state.companies.credit_monthly_payment}
        onChangeCreditMonthlyPayment={this.handleChangeBankingDataCreditMonthlyPayment}
        credit_expire_dt={this.state.companies.credit_expire_dt}
        onChangeCreditExpireDt={this.handleChangeBankingDataCreditExpireDt}
        credit_currency={this.state.companies.credit_currency}
        onChangeCreditCurrency={this.handleChangeBankingDataCreditCurrency}
        credit_card_type={this.state.companies.credit_card_type}
        onChangeCreditCardType={this.handleChangeBankingDataCreditCardType}
        credit_payments_done={this.state.companies.credit_payments_done}
        onChangeCreditPaymentsDone={this.handleChangeBankingDataCreditPaymentsDone}
        credit_line_quota={this.state.companies.credit_line_quota}
        onChangeCreditLineQuota={this.handleChangeBankingDataCreditLineQuota}
        credit_used_ammount={this.state.companies.credit_used_ammount}
        onChangeCreditUsedAmmount={this.handleChangeBankingDataCreditUsedAmmount}
      />

      <SpouseData
        spouse_rut={this.state.spouse.spouse_rut}
        onChangeSpouseRut={this.handleChangeSpouseRut}
        spouse_name={this.state.spouse.spouse_name}
        onChangeSpouseName={this.handleChangeSpouseName}
        spouse_last_name={this.state.spouse.spouse_last_name}
        onChangeSpouseLastName={this.handleChangeSpouseLastName}
        spouse_mother_name={this.state.spouse.spouse_mother_name}
        onChangeSpouseMotherName={this.handleChangeSpouseMotherName}
        spouse_day_of_birthday={this.state.spouse.spouse_day_of_birthday}
        onChangeSpouseDayOfBirthday={this.handleChangeSpouseDayOfBirthday}
        spouse_month_of_birthday={this.state.spouse.spouse_month_of_birthday}
        onChangeSpouseMonthOfBirthday={this.handleChangeSpouseMonthOfBirthday}
        spouse_year_of_birthday={this.state.spouse.spouse_year_of_birthday}
        onChangeSpouseYearOfBirthday={this.handleChangeSpouseYearOfBirthday}
        spouse_gender={this.state.spouse.spouse_gender}
        onChangeSpouseGender={this.handleChangeSpouseGender}
        spouse_nationality={this.state.spouse.spouse_nationality}
        onChangeSpouseNationality={this.handleChangeSpouseNationality}
        spouse_phone={this.state.spouse.spouse_phone}
        onChangeSpousePhone={this.handleChangeSpousePhone}
        spouse_email={this.state.spouse.spouse_email}
        onChangeSpouseEmail={this.handleChangeSpouseEmail}
        spouse_degree={this.state.spouse.spouse_degree}
        onChangeSpouseDegree={this.handleChangeSpouseDegree}
        spouse_educational_level={this.state.spouse.spouse_educational_level}
        onChangeSpouseEducationalLevel={this.handleChangeSpouseEducationalLevel}
        spouse_activity={this.state.spouse.spouse_activity}
        onChangeSpouseActivity={this.handleChangeSpouseActivity}
        spouse_activity_type={this.state.spouse.spouse_activity_type}
        onChangeSpouseActivityType={this.handleChangeSpouseActivityType}
        spouse_init_activity_day={this.state.spouse.spouse_init_activity_day}
        onChangeSpouseInitActivityDay={this.handleChangeSpouseInitActivityDay}
        spouse_init_activity_month={this.state.spouse.spouse_init_activity_month}
        onChangeSpouseInitActivityMonth={this.handleChangeSpouseInitActivityMonth}
        spouse_init_activity_year={this.state.spouse.spouse_init_activity_year}
        onChangeSpouseInitActivityYear={this.handleChangeSpouseInitActivityYear}
        spouse_job_init_day={this.state.spouse.spouse_job_init_day}
        onChangeSpouseJobInitDay={this.handleChangeSpouseJobInitDay}
        spouse_job_init_month={this.state.spouse.spouse_job_init_month}
        onChangeSpouseJobInitMonth={this.handleChangeSpouseJobInitMonth}
        spouse_job_init_year={this.state.spouse.spouse_job_init_year}
        onChangeSpouseJobInitYear={this.handleChangeSpouseJobInitYear}
        spouse_activity={this.state.spouse.spouse_activity}
        onChangeSpouseActivity={this.handleChangeSpouseActivity}
        spouse_net_income={this.state.spouse.spouse_net_income}
        onChangeSpouseNetIncome={this.handleChangeSpouseNetIncome}
        spouse_employer_name={this.state.spouse.spouse_employer_name}
        onChangeSpouseEmployerName={this.handleChangeSpouseEmployerName}
        spouse_employer_rut={this.state.spouse.spouse_employer_rut}
        onChangeSpouseEmployerRut={this.handleChangeSpouseEmployerRut}
        spouse_employer_industry={this.state.spouse.spouse_employer_industry}
        onChangeSpouseEmployerIndustry={this.handleChangeSpouseEmployerIndustry}
        spouse_employer_address={this.state.spouse.spouse_employer_address}
        onChangeSpouseEmployerAddress={this.handleChangeSpouseEmployerAddress}
        spouse_employer_city2={this.state.spouse.spouse_employer_city2}
        onChangeSpouseEmployerCity2={this.handleChangeSpouseEmployerCity2}
        spouse_employer_city={this.state.spouse.spouse_employer_city}
        onChangeSpouseEmployerCity={this.handleChangeSpouseEmployerCity}
        spouse_employer_state={this.state.spouse.spouse_employer_state}
        onChangeSpouseEmployerState={this.handleChangeSpouseEmployerState}
        spouse_employer_phone={this.state.spouse.spouse_employer_phone}
        onChangeSpouseEmployerPhone={this.handleChangeSpouseEmployerPhone}
      />

      <FamiliarGroupData
        dependent_quantity={this.state.familiarGroup.dependent_quantity}
        onChangeFamiliarGroupDependentQuantity={this.handleChangeFamiliarGroupDependentQuantity}
        name={this.state.familiarGroup.name}
        onChangeFamiliarGroupName={this.handleChangeFamiliarGroupName}
        relationship={this.state.familiarGroup.relationship}
        onChangeFamiliarGroupRelationship={this.handleChangeFamiliarGroupRelationship}
        pension_ammount={this.state.familiarGroup.pension_ammount}
        onChangeFamiliarGroupPensionAmmount={this.handleChangeFamiliarGroupPensionAmmount}
        age={this.state.familiarGroup.age}
        onChangeFamiliarGroupAge={this.handleChangeFamiliarGroupAge}
        day_of_birthday={this.state.familiarGroup.day_of_birthday}
        onChangeFamiliarGroupDayOfBirthday={this.handleChangeFamiliarGroupDayOfBirthday}
        month_of_birthday={this.state.familiarGroup.month_of_birthday}
        onChangeFamiliarGroupMonthOfBirthday={this.handleChangeFamiliarGroupMonthOfBirthday}
        year_of_birthday={this.state.familiarGroup.year_of_birthday}
        onChangeFamiliarGroupYearOfBirthday={this.handleChangeFamiliarGroupYearOfBirthday}
        gender={this.state.familiarGroup.gender}
        onChangeFamiliarGroupGender={this.handleChangeFamiliarGroupGender}
        activity={this.state.familiarGroup.activity}
        onChangeFamiliarGroupActivity={this.handleChangeFamiliarGroupActivity}
        income={this.state.familiarGroup.income}
        onChangeFamiliarGroupIncome={this.handleChangeFamiliarGroupIncome}

      />


      <article role="button">
        <span>Enviar Cotizaciones</span>
        <span className="icon">+</span>
      </article>

    </section>)

  }

}
