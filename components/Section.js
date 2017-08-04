import React from 'react'
import Link from 'next/link'
import Session from '../components/session'
import {get, set, each, mapValues} from 'lodash';
import axios from 'axios';
//import Project from './Project';
import servicesConfiguration from '../config/services';
import CustomerData from './CustomerData';
import EmployeesData from './EmployeesData';
import PropertiesData from './PropertiesData';
import VehiclesData from './VehiclesData';
import InvestmentsData from './InvestmentsData';
import CompaniesData from './CompaniesData';
import BankingData from './BankingData';
import CreditsData from './CreditsData';
import SpouseData from './SpouseData';
import FamilyData from './FamilyData';
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer:{
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
      employees:{
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
      properties: [this.getProperty()],
      vehicles: [this.getVehicle()],
      investments:[this.getInvestment()],
      companies: [this.getCompanies()],
      bankings:[this.getBanking()],
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
      family : [this.getFamily()]
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
  setStateData  = (key, event) => {
    let state = this.state;
    set(state, key, event.target.value)
    this.setState(state);
  }


  handleSubmit = (event) => {

  }

  updateCustomer =(e) => {
    const session = Session.getSession();
    this.setState({
      userData: get(session, 'userData'),
    })
    axios.put(servicesConfiguration.user + "/update/customer",
      {data:this.state.customer},
      {
        params:{
          email : get(session, 'userData.email')
        },
        headers: {
          authorization: get(session, 'token')
        },
        withCredentials:true
    })
    .then((results) => {
      if(results.status === 200) {
        console.log("tuto guardado")
      }
    })
    .catch((e)=>{
      console.log("error guardando los datos", e)
    });
  }


  getFamily = () => {
    return {
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
    };
  }
  addFamily = () => {
    let stt = this.state.family;
    stt.push(this.getFamily());
    this.setState({family:stt});
  }

  createFamilyComponents() {
    const familyState = this.state.family;
    let components = [];
    each(familyState, (relative, key) => {
      components.push(
        <FamilyData
          key={key}
          dependent_quantity={relative.dependent_quantity}
          onChangeFamilyDependentQuantity={e => {this.setStateData("family."+key+".dependent_quantity", e)}}
          name={relative.name}
          onChangeFamilyName={e => {this.setStateData("family."+key+".name", e)}}
          relationship={relative.relationship}
          onChangeFamilyRelationship={e => {this.setStateData("family."+key+".relationship", e)}}
          pension_ammount={relative.pension_ammount}
          onChangeFamilyPensionAmmount={e => {this.setStateData("family."+key+".pension_ammount", e)}}
          age={relative.age}
          onChangeFamilyAge={e => {this.setStateData("family."+key+".age", e)}}
          day_of_birthday={relative.day_of_birthday}
          onChangeFamilyDayOfBirthday={e => {this.setStateData("family."+key+".day_of_birthday", e)}}
          month_of_birthday={relative.month_of_birthday}
          onChangeFamilyMonthOfBirthday={e => {this.setStateData("family."+key+".month_of_birthday", e)}}
          year_of_birthday={relative.year_of_birthday}
          onChangeFamilyYearOfBirthday={e => {this.setStateData("family."+key+".year_of_birthday", e)}}
          gender={relative.gender}
          onChangeFamilyGender={e => {this.setStateData("family."+key+".gender", e)}}
          activity={relative.activity}
          onChangeFamilyActivity={e => {this.setStateData("family."+key+".activity", e)}}
          income={relative.income}
          onChangeFamilyIncome={e => {this.setStateData("family."+key+".income", e)}}
        />);
    });
    return components;

  }

  getBanking = () => {
    return {
      bank_name:"",
      bank_office:"",
      bank_account_number:"",
      loans: {
        loan_warranty_type:"",
        loan_expire_dt:"",
        loan_fees_paid:"",
        loan_monthly_payment:"",
        loan_total_fees:"",
        loan_balance_debt:""
      },
      credits: {
        credit_used_quota:"",
        credit_line_ammount:"",
        credit_monthly_payment:"",
        credit_expire_dt:"",
        credit_currency:"",
        credit_card_type:"",
        credit_payments_done:"",
        credit_line_quota:"",
        credit_used_ammount:""
      }
    };
  }

  addBanking = () => {
    let stt = this.state.bankings;
    stt.push(this.getBanking());
    this.setState({bankings:stt});
  }

  createBankingsComponents() {
    const bankingsState = this.state.bankings;
    let components = [];
    each(bankingsState, (banking, key) => {
      components.push(
        <BankingData
          key={key}
          bank_name={banking.bank_name}
          onChangeBankName={e => {this.setStateData("bankings."+key+".bank_name", e)}}
          bank_office={banking.bank_office}
          onChangeBankOffice={e => {this.setStateData("bankings."+key+".bank_office", e)}}
          bank_account_number={banking.bank_account_number}
          onChangeBankAccountNumber={e => {this.setStateData("bankings."+key+".bank_account_number", e)}}
          loan_warranty_type={banking.loans.loan_warranty_type}
          onChangeLoanWarrantyType={e => {this.setStateData("bankings."+key+".loans.loan_warranty_type", e)}}
          loan_expire_dt={banking.loans.loan_expire_dt}
          onChangeLoanExpireDt={e => {this.setStateData("bankings."+key+".loans.loan_expire_dt", e)}}
          loan_fees_paid={banking.loans.loan_fees_paid}
          onChangeLoanFeesPaid={e => {this.setStateData("bankings."+key+".loans.loan_fees_paid", e)}}
          loan_monthly_payment={banking.loans.loan_monthly_payment}
          onChangeLoanMonthlyPayment={e => {this.setStateData("bankings."+key+".loans.loan_monthly_payment", e)}}
          loan_total_fees={banking.loans.loan_total_fees}
          onChangeLoanTotalFees={e => {this.setStateData("bankings."+key+".loans.loan_total_fees", e)}}
          loan_balance_debt={banking.loans.loan_balance_debt}
          onChangeLoanBalanceDebt={e => {this.setStateData("bankings."+key+".loans.loan_balance_debt", e)}}
          credit_used_quota={banking.credits.credit_used_quota}
          onChangeCreditUsedQuota={e => {this.setStateData("bankings."+key+".credits.credit_used_quota", e)}}
          credit_line_ammount={banking.credits.credit_line_amount}
          onChangeCreditLineAmmount={e => {this.setStateData("bankings."+key+".credits.credit_line_amount", e)}}
          credit_monthly_payment={banking.credits.credit_monthly_payment}
          onChangeCreditMonthlyPayment={e => {this.setStateData("bankings."+key+".credits.credit_monthly_payment", e)}}
          credit_expire_dt={banking.credits.credit_expire_dt}
          onChangeCreditExpireDt={e => {this.setStateData("bankings."+key+".credits.credit_expire_dt", e)}}
          credit_currency={banking.credits.credit_currency}
          onChangeCreditCurrency={e => {this.setStateData("bankings."+key+".credits.credit_currency", e)}}
          credit_card_type={banking.credits.credit_card_type}
          onChangeCreditCardType={e => {this.setStateData("bankings."+key+".credits.credit_card_type", e)}}
          credit_payments_done={banking.credits.credit_payments_done}
          onChangeCreditPaymentsDone={e => {this.setStateData("bankings."+key+".credits.credit_payments_done", e)}}
          credit_line_quota={banking.credits.credit_line_quota}
          onChangeCreditLineQuota={e => {this.setStateData("bankings."+key+".credits.credit_line_quota", e)}}
          credit_used_ammount={banking.credits.credit_used_ammount}
          onChangeCreditUsedAmmount={e => {this.setStateData("bankings."+key+".credits.credit_used_ammount", e)}}
        />);
    });
    return components;

  }


  getCompanies = () => {
    return {
      company_name:"",
      company_id:"",
      company_industry:"",
      company_perc_ownership:"",
      company_value:"",
      company_start_dt:"",
      company_notaria:"",
      company_net_worth:""
    }
  }
  addCompany = () => {
    let stt = this.state.companies;
    stt.push(this.getCompanies());
    this.setState({companies:stt});
  }
  createCompaniesComponents() {
    const companiesState = this.state.companies;
    let components = [];
    each(companiesState, (company, key) => {
      components.push(
        <CompaniesData
          key={key}
          company_id={company.company_id}
          onChangeCompanyId={e => {this.setStateData("company."+key+".company_id", e)}}
          company_name={company.company_name}
          onChangeCompanyName={e => {this.setStateData("company."+key+".company_name", e)}}
          company_industry={company.company_industry}
          onChangeCompanyIndustry={e => {this.setStateData("company."+key+".company_industry", e)}}
          company_perc_ownership={company.company_perc_ownership}
          onChangeCompanyPercOwnership={e => {this.setStateData("company."+key+".company_perc_ownership", e)}}
          company_value={company.company_value}
          onChangeCompanyValue={e => {this.setStateData("company."+key+".company_value", e)}}
          company_start_dt={company.company_start_dt}
          onChangeCompanyStartDt={e => {this.setStateData("company."+key+".company_start_dt", e)}}
          company_notaria={company.company_notaria}
          onChangeCompanyNotaria={e => {this.setStateData("company."+key+".company_notaria", e)}}
          company_net_worth={company.company_net_worth}
          onChangeCompanyNetWorth={e => {this.setStateData("company."+key+".company_net_worth", e)}}
        />);
    });
    return components;

  }


  addInvestment  = () => {
    let stt = this.state.investments;
    stt.push(this.getInvestment());
    this.setState({investments:stt});
  }
  getInvestment = () => {
    return {
      investment_type:"",
      investment_issuer:"",
      investment_mortgagor_flg:"",
      investment_value:""
    };
  }

  createInvestmentsComponents() {
    const investmentsState = this.state.investments;
    let components = [];
    each(investmentsState, (investment, key) => {
      components.push(
        <InvestmentsData
          key={key}
          investment_type={investment.investment_type}
          onChangeInvestmentType={e => {this.setStateData("investments."+key+".investment_type", e)}}
          investment_issuer={investment.investment_issuer}
          onChangeInvestmentIssuer={e => {this.setStateData("investments."+key+".investment_issuer", e)}}
          investment_mortgagor_flg={investment.investment_mortgagor_flg}
          onChangeInvestmentMortgagorFlg={e => {this.setStateData("investments."+key+".investment_mortgagor_flg", e)}}
          investment_value={investment.investment_value}
          onChangeInvestmentValue={e => {this.setStateData("investments."+key+".investment_value", e)}}
        />);
    });
    return components;

  }

  addVehicle  = () => {
    let stt = this.state.vehicles;
    stt.push(this.getVehicle());
    this.setState({vehicles:stt});
  }

  getVehicle = () => {
    return {
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
    }
  }

  createVehiclesComponents() {
    const vehiclesState = this.state.vehicles;
    let components = [];
    each(vehiclesState, (vehicle, key) => {
      components.push(
        <VehiclesData
          key={key}
          vehicle_id={vehicle.vehicle_id}
          onChangeVehicleId={e => {this.setStateData("vehicles."+key+".vehicle_id", e)}}
          vehicle_type={vehicle.vehicle_type}
          onChangeVehicleType = {e => {this.setStateData("vehicles."+key+".vehicle_type", e)}}
          vehicle_brand={vehicle.vehicle_brand}
          onChangeVehicleBrand={e => {this.setStateData("vehicles."+key+".vehicle_brand", e)}}
          vehicle_model={vehicle.vehicle_model}
          onChangeVehicleModel={e => {this.setStateData("vehicles."+key+".vehicle_model", e)}}
          vehicle_year={vehicle.vehicle_year}
          onChangeVehicleYear={e => {this.setStateData("vehicles."+key+".vehicle_year", e)}}
          vehicle_value={vehicle.vehicle_value}
          onChangeVehicleValue={e => {this.setStateData("vehicles."+key+".vehicle_value", e)}}
          vehicle_insurance_flg={vehicle.vehicle_insurance_flg}
          onChangeVehicleInsuranceFlg={e => {this.setStateData("vehicles."+key+".vehicle_insurance_flg", e)}}
          vehicle_mortgagor_flg={vehicle.vehicle_mortgagor_flg}
          onChangeVehicleMortgagorFlg={e => {this.setStateData("vehicles."+key+".vehicle_mortgagor_flg", e)}}
          vehicle_fee_unpaid={vehicle.vehicle_fee_unpaid}
          onChangeVehicleFeeUnpaid={e => {this.setStateData("vehicles."+key+".vehicle_fee_unpaid", e)}}
          vehicle_monthly_payment={vehicle.vehicle_monthly_payment}
          onChangeVehicleIdMonthlyPayment={e => {this.setStateData("vehicles."+key+".vehicle_monthly_payment", e)}}
        />);
    });
    return components;

  }
  addProperty  = () => {
    let stt = this.state.properties;
    stt.push(this.getProperty());
    this.setState({properties:stt});
  }

  getProperty = () => {
    return {
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
    }
  }

  createPropertiesComponents() {

    const propertiesState = this.state.properties;
    let components = [];
    each(propertiesState, (propertie, key) => {
      components.push(<PropertiesData
        key={key}
        property_id={propertie.property_id}
        onChangePropertyId={e => {this.setStateData("properties."+key+".property_id", e)}}
        property_type={propertie.property_type}
        onChangePropertyType={e => this.setStateData("properties."+key+".property_type", e)}
        property_value={propertie.property_value}
        onChangePropertyValue={e => this.setStateData("properties."+key+".property_value", e)}
        property_fiscal_value={propertie.property_fiscal_value}
        onChangePropertyFiscalValue={e => this.setStateData("properties."+key+".property_fiscal_value", e)}
        property_perc_ownership={propertie.property_perc_ownership}
        onChangePropertyPercOwnership={e => this.setStateData("properties."+key+".property_perc_ownership", e)}
        property_surface_sqt={propertie.property_surface_sqt}
        onChangePropertySurfaceSqt={e => this.setStateData("properties."+key+".property_surface_sqt", e)}
        property_address={propertie.property_address}
        onChangePropertyAddress={e => this.setStateData("properties."+key+".property_address", e)}
        property_city_2={propertie.property_city_2}
        onChangePropertyCity2={e => this.setStateData("properties."+key+".property_city_2", e)}
        property_mortgagor={propertie.property_mortgagor}
        onChangePropertyMortgagor={e => this.setStateData("properties."+key+".property_mortgagor", e)}
        property_insurance_flg={propertie.property_insurance_flg}
        onChangePropertyInsuranceFlg={e => this.setStateData("properties."+key+".property_insurance_flg", e)}
        property_last_payment_day={propertie.property_last_payment_day}
        onChangePropertyLastPaymentDay={e => this.setStateData("properties."+key+".property_last_payment_day", e)}
        property_last_payment_month={propertie.property_last_payment_month}
        onChangePropertyLastPaymentMonth={e => this.setStateData("properties."+key+".property_last_payment_month", e)}
        property_last_payment_year={propertie.property_last_payment_year}
        onChangePropertyLastPaymentYear={e => this.setStateData("properties."+key+".property_last_payment_year", e)}
        property_fee_paid={propertie.property_fee_paid}
        onChangePropertyFeePaid={e => this.setStateData("properties."+key+".property_fee_paid", e)}
        property_debt_balance={propertie.property_debt_balance}
        onChangePropertyDebtBalance={e => this.setStateData("properties."+key+".property_debt_balance", e)}
        property_fee_totals={propertie.property_fee_totals}
        onChangePropertyFeeTotals={e => this.setStateData("properties."+key+".property_fee_totals", e)}
        property_fee_monthly_payment={propertie.property_fee_monthly_payment}
        onChangePropertyFeeMonthlyPayment={e => this.setStateData("properties."+key+".property_fee_monthly_payment", e)}
        property_rental_income={propertie.property_rental_income}
        onChangePropertyRentalIncome={e => this.setStateData("properties."+key+".property_rental_income", e)}
        />);
    });

    return components;

  }

  render(){
    const propertiesComponent = this.createPropertiesComponents();
    const vehiclesComponent = this.createVehiclesComponents();
    const investmentsComponent = this.createInvestmentsComponents();
    const companiesComponent = this.createCompaniesComponents();
    const bankingsComponent = this.createBankingsComponents();
    const familyComponent = this.createFamilyComponents();

    return (<section role="region">
    <button type="submit" className="btn-flat first-level first-negative" onClick = {this.handleSubmit}>Guardar</button>

      <CustomerData

        foid={this.state.customer.foid}
        onChangeFoid={(e) => this.setStateData("customer.foid", e)}
        onBlurFoid={(e) => this.updateCustomer(e)}
        name={this.state.customer.name}
        onChangeName={(e) => this.setStateData("customer.name", e)}
        lastName={this.state.customer.last_name}
        onChangeLastName={e => this.setStateData("customer.last_name", e)}
        motherName={this.state.customer.mother_name}
        onChangeMotherName={e => this.setStateData("customer.mother_name", e)}
        dayOfBirthday={this.state.customer.day_of_birthday}
        onChangeDayOfBirthday={e => this.setStateData("customer.day_of_birthday", e)}
        monthOfBirthday={this.state.customer.month_of_birthday}
        onChangeMonthOfBirthday={e => this.setStateData("customer.month_of_birthday", e)}
        yearOfBirthday={this.state.customer.year_of_birthday}
        onChangeYearOfBirthday={e => this.setStateData("customer.year_of_birthday", e)}
        nationality={this.state.customer.nationality}
        onChangeNationality={e => this.setStateData("customer.nationality", e)}
        gender={this.state.customer.gender}
        onChangeGender={e => this.setStateData("customer.gender", e)}
        maritalStatus={this.state.customer.marital_status}
        onChangeMaritalStatus={e => this.setStateData("customer.marital_status", e)}
        maritalRegime={this.state.customer.marital_regime}
        onChangeMaritalRegime={e => this.setStateData("customer.marital_regime", e)}
        educationalLevel={this.state.customer.educationalLevel}
        onChangeEducationalLevel={e => this.setStateData("customer.educational_level", e)}
        degree={this.state.customer.degree}
        onChangeDegree={e => this.setStateData("customer.degree", e)}
        college={this.state.customer.college}
        onChangeCollege={e => this.setStateData("customer.college", e)}
        handleChangeCustomerDataCollege={this.handleChangeCustomerDataCollege}
        mobile_phone={this.state.customer.mobile_phone}
        onChangeMobilePhone={e => this.setStateData("customer.mobile_phone", e)}
        user_email={this.state.customer.user_email}
        onChangeUserEmail={e => this.setStateData("customer.user_email", e)}
        server_email={this.state.customer.server_email}
        onChangeServerEmail={e => this.setStateData("customer.server_email", e)}
        country={this.state.customer.country}
        onChangeCountry={e => this.setStateData("customer.country", e)}
        state={this.state.customer.state}
        onChangeState={e => this.setStateData("customer.state", e)}
        city={this.state.customer.city}
        onChangeCity={e => this.setStateData("customer.city", e)}
        city_2={this.state.customer.city_2}
        onChangeCity2={e => this.setStateData("customer.city_2", e)}
        street_name={this.state.customer.street_name}
        onChangeStreetName={e => this.setStateData("customer.street_name", e)}
        street_number={this.state.customer.street_number}
        onChangeStreetNumber={e => this.setStateData("customer.street_number", e)}
        department_number={this.state.customer.department_number}
        onChangeDepartmentNumer={e => this.setStateData("department_number.gender", e)}
        home_ownership={this.state.customer.home_ownership}
        onChangeHomeOwnership={e => this.setStateData("customer.home_ownership", e)}
        monthly_payment={this.state.customer.monthly_payment}
        onChangeMonthlyPayment={e => this.setStateData("customer.monthly_payment", e)}

      />
      <EmployeesData
        employer_name={this.state.employees.employer_name}
        onChangeEmployerName={e => this.setStateData("employees.employer_id", e)}
        employer_id={this.state.employees.employer_id}
        onChangeEmployerId={e => this.setStateData("employees.employer_id", e)}
        employer_address={this.state.employees.employer_address}
        onChangeEmployerAddress={e => this.setStateData("employees.employer_address", e)}
        industry={this.state.employees.industry}
        onChangeIndustry={e => this.setStateData("employees.industry", e)}
        job_title={this.state.employees.job_title}
        onChangeJobTitle={e => this.setStateData("employees.job_title", e)}
        job_senority={this.state.employees.job_senority}
        onChangeJobSenority={e => this.setStateData("employees.job_senority", e)}
        job_entry_year={this.state.employees.job_entry_year}
        onChangeJobEntryYear={e => this.setStateData("employees.job_entry_year", e)}
        job_entry_month={this.state.employees.job_entry_month}
        onChangeJobEntryMonth={e => this.setStateData("employees.job_entry_month", e)}
        job_entry_day={this.state.employees.job_entry_day}
        onChangeJobEntryDay={e => this.setStateData("employees.job_entry_day", e)}
        net_income={this.state.employees.net_income}
        onChangeNetIncome={e => this.setStateData("employees.net_income", e)}
        annualized_variable_bonus={this.state.employees.annualized_variable_bonus}
        onChangeAnnualizedVariableBonus={e => this.setStateData("employees.annualized_variable_bonus", e)}
        previous_employer={this.state.employees.previous_employer}
        onChangePreviousEmployer={e => this.setStateData("employees.previous_employer", e)}
        previous_job_title={this.state.employees.previous_job_title}
        onChangePreviousJobTitle={e => this.setStateData("employees.previous_job_title", e)}
        previous_net_income={this.state.employees.previous_net_income}
        onChangePreviousNetIncome={e => this.setStateData("employees.previous_net_income", e)}
        chief_name={this.state.employees.chief_name}
        onChangeChiefName={e => this.setStateData("employees.chief_name", e)}
        chief_job_title={this.state.employees.chief_job_title}
        onChangeChiefJobTitle={e => this.setStateData("employees.chief_job_title", e)}

      />

      {propertiesComponent}
      <article role="button" onClick={this.addProperty}>
        <span>Agregar Propiedad</span>
        <span className="icon">+</span>
      </article>

      {vehiclesComponent}
      <article role="button" onClick={this.addVehicle}>
        <span>Agregar Vehiculo</span>
        <span className="icon">+</span>
      </article>

      {investmentsComponent}
      <article role="button" onClick={this.addInvestment}>
        <span>Agregar Inversion</span>
        <span className="icon">+</span>
      </article>

      {companiesComponent}
      <article role="button" onClick={this.addCompany}>
        <span>Agregar Sociedad</span>
        <span className="icon">+</span>
      </article>

      {bankingsComponent}
      <article role="button" onClick={this.addBanking}>
        <span>Agregar Banca</span>
        <span className="icon">+</span>
      </article>

      <SpouseData
        spouse_rut={this.state.spouse.spouse_rut}
        onChangeSpouseRut={e => this.setStateData("spouse.spouse_rut", e)}
        spouse_name={this.state.spouse.spouse_name}
        onChangeSpouseName={e => this.setStateData("spouse.spouse_name", e)}
        spouse_last_name={this.state.spouse.spouse_last_name}
        onChangeSpouseLastName={e => this.setStateData("spouse.spouse_last_name", e)}
        spouse_mother_name={this.state.spouse.spouse_mother_name}
        onChangeSpouseMotherName={e => this.setStateData("spouse.spouse_mother_name", e)}
        spouse_day_of_birthday={this.state.spouse.spouse_day_of_birthday}
        onChangeSpouseDayOfBirthday={e => this.setStateData("spouse.spouse_day_of_birthday", e)}
        spouse_month_of_birthday={this.state.spouse.spouse_month_of_birthday}
        onChangeSpouseMonthOfBirthday={e => this.setStateData("spouse.spouse_month_of_birthday", e)}
        spouse_year_of_birthday={this.state.spouse.spouse_year_of_birthday}
        onChangeSpouseYearOfBirthday={e => this.setStateData("spouse.spouse_year_of_birthday", e)}
        spouse_gender={this.state.spouse.spouse_gender}
        onChangeSpouseGender={e => this.setStateData("spouse.spouse_gender", e)}
        spouse_nationality={this.state.spouse.spouse_nationality}
        onChangeSpouseNationality={e => this.setStateData("spouse.spouse_nationality", e)}
        spouse_phone={this.state.spouse.spouse_phone}
        onChangeSpousePhone={e => this.setStateData("spouse.spouse_phone", e)}
        spouse_email={this.state.spouse.spouse_email}
        onChangeSpouseEmail={e => this.setStateData("spouse.spouse_email", e)}
        spouse_degree={this.state.spouse.spouse_degree}
        onChangeSpouseDegree={e => this.setStateData("spouse.spouse_degree", e)}
        spouse_educational_level={this.state.spouse.spouse_educational_level}
        onChangeSpouseEducationalLevel={e => this.setStateData("spouse.spouse_educational_level", e)}
        spouse_activity={this.state.spouse.spouse_activity}
        onChangeSpouseActivity={e => this.setStateData("spouse.spouse_activity", e)}
        spouse_activity_type={this.state.spouse.spouse_activity_type}
        onChangeSpouseActivityType={e => this.setStateData("spouse.spouse_activity_type", e)}
        spouse_init_activity_day={this.state.spouse.spouse_init_activity_day}
        onChangeSpouseInitActivityDay={e => this.setStateData("spouse.spouse_init_activity_day", e)}
        spouse_init_activity_month={this.state.spouse.spouse_init_activity_month}
        onChangeSpouseInitActivityMonth={e => this.setStateData("spouse.spouse_init_activity_month", e)}
        spouse_init_activity_year={this.state.spouse.spouse_init_activity_year}
        onChangeSpouseInitActivityYear={e => this.setStateData("spouse.spouse_init_activity_year", e)}
        spouse_job_init_day={this.state.spouse.spouse_job_init_day}
        onChangeSpouseJobInitDay={e => this.setStateData("spouse.spouse_job_init_day", e)}
        spouse_job_init_month={this.state.spouse.spouse_job_init_month}
        onChangeSpouseJobInitMonth={e => this.setStateData("spouse.spouse_job_init_month", e)}
        spouse_job_init_year={this.state.spouse.spouse_job_init_year}
        onChangeSpouseJobInitYear={e => this.setStateData("spouse.spouse_job_init_year", e)}
        spouse_net_income={this.state.spouse.spouse_net_income}
        onChangeSpouseNetIncome={e => this.setStateData("spouse.spouse_net_income", e)}
        spouse_employer_name={this.state.spouse.spouse_employer_name}
        onChangeSpouseEmployerName={e => this.setStateData("spouse.spouse_employer_name", e)}
        spouse_employer_rut={this.state.spouse.spouse_employer_rut}
        onChangeSpouseEmployerRut={e => this.setStateData("spouse.spouse_employer_rut", e)}
        spouse_employer_industry={this.state.spouse.spouse_employer_industry}
        onChangeSpouseEmployerIndustry={e => this.setStateData("spouse.spouse_employer_industry", e)}
        spouse_employer_address={this.state.spouse.spouse_employer_address}
        onChangeSpouseEmployerAddress={e => this.setStateData("spouse.spouse_employer_address", e)}
        spouse_employer_city2={this.state.spouse.spouse_employer_city2}
        onChangeSpouseEmployerCity2={e => this.setStateData("spouse.spouse_employer_city2", e)}
        spouse_employer_city={this.state.spouse.spouse_employer_city}
        onChangeSpouseEmployerCity={e => this.setStateData("spouse.spouse_employer_city", e)}
        spouse_employer_state={this.state.spouse.spouse_employer_state}
        onChangeSpouseEmployerState={e => this.setStateData("spouse.spouse_employer_state", e)}
        spouse_employer_phone={this.state.spouse.spouse_employer_phone}
        onChangeSpouseEmployerPhone={e => this.setStateData("spouse.spouse_employer_phone", e)}

        />

        {familyComponent}
        <article role="button" onClick={this.addFamily}>
          <span>Agregar Carga</span>
          <span className="icon">+</span>
        </article>

    </section>)

  }

}
