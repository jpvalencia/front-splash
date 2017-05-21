import React from 'react'
import Router from 'next/router'
import Page from '../components/Page'
import Login from '../components/Login'
import Layout from '../components/Layout'
import Session from '../components/session'
import {has} from 'lodash';

export default class extends Page {
  componentDidMount() {
    let session = Session.getSession();

    if(has(session,'userData')){
      Router.push({pathname: '/index'})
    }
  }

  render() {
    return (
      <Layout >
      <Login />
      </Layout>
    )

  }

}
