import React from 'react'
import Router from 'next/router'
import Page from '../components/Page'
import Splash from '../components/Splash'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Session from '../components/session'
import {has} from 'lodash';

export default class extends Page {
  render() {
    return (
      <div>
      <Header />
      <Splash />
      </div>

    )

  }

}
