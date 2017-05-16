import React from 'react';
import ChangepasswordformComp from '../components/changepasswordform';
import Header from '../components/Header';

class Changepasswordform extends React.Component {
  static getInitialProps({query}){
    return {
      email: query.email,
      token: query.token
    };
  }

  render() {
    return (<div>
      <Header />
      <ChangepasswordformComp email={this.props.email} token={this.props.token}></ChangepasswordformComp>
    </div>)
  }

}
export default Changepasswordform;
