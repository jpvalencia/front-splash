import React from 'react'
import Router from 'next/router'
import Page from '../components/Page'
import Login from '../components/Login'
import Layout from '../components/Layout'
import Session from '../components/session'
import {has} from 'lodash';

export default class extends Page {
  render() {
    return (
      <Layout >
      <Login />
      </Layout>
    )

  }

}
