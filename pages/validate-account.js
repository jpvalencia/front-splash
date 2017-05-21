import React from 'react';
import ChangepasswordformComp from '../components/changepasswordform';
import Layout from '../components/Layout';

class Changepasswordform extends React.Component {
  static getInitialProps({query}){
    return {
      email: query.email,
      token: query.token
    };
  }

  render() {
    return (<Layout>
      <ChangepasswordformComp email={this.props.email} token={this.props.token}></ChangepasswordformComp>
    </Layout>)
  }

}
export default Changepasswordform;
