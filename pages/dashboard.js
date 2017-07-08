import React from 'react';
import Router from 'next/router';
import Page from '../components/Page';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';
import Aside from '../components/Aside'
import Section from '../components/Section'
export default class extends Page {

  render() {


    return (
      <Layout>
        <Aside />
        <Section />
      </Layout>
    )

  }

}
