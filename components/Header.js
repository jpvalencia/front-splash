import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
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
    return (
      <Head>
    		<meta charset="utf-8"/>
    		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    		<meta name="viewport" content="width=device-width, initial-scale=1"/>
    		<title>Hipotecario Facil</title>
        {/* Import CSS for nprogress */}
        <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        {/* Import CSS for hipotecario facil */}
        <link rel='stylesheet' type='text/css' href='/static/hipotecario-facil.min.css' />
        {/* Import CSS for hipotecario facil */}
        <link rel='stylesheet' type='text/css' href='/static/dashboard.min.css' />
        <link rel='stylesheet' type='text/css' href='/static/splashpage.min.css' />

    	</Head>
    )

  }

}
