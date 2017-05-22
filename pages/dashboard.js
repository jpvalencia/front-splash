import React from 'react';
import Router from 'next/router';
import Page from '../components/Page';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';
import {has} from 'lodash';

export default class extends Page {

  render() {


    return (
      <Layout>
      <Dashboard />
      </Layout>
    )

  }

}
