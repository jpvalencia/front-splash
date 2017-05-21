import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import Menu from '../components/menu'
import Session from '../components/session'
import {get} from 'lodash';

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const linkStyle = {
  margin: '0 10px 0 0'
}
export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (<div style={{ marginBottom: 20 }}>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        {/* Import CSS for hipotecario facil */}
        <link rel='stylesheet' type='text/css' href='/static/hipotecario-facil.min.css' />
      </Head>
      <header>
      <Menu />
			<main>
				<p>Logo HipotecarioFacil.com</p>
			</main>
		</header>
    </div>)

  }

}
