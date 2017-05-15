import React from 'react';
import ChangepasswordformComp from '../components/changepasswordform';

class Changepasswordform extends React.Component {
  static getInitialProps({query}){
    return {
      email: query.email,
      token: query.token
    };
  }

  render() {
    return <ChangepasswordformComp email={this.props.email} token={this.props.token}></ChangepasswordformComp>
  }

}
export default Changepasswordform;
