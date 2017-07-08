import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class extends React.Component {

  render() {
    return (
        <div>
          <Header/>
        		<header role="banner">
        			<section>
        				<div className="logo"></div>
        			</section>
        		</header>
        		<main>
            { this.props.children }
            </main>
          <Footer/>
      </div>
    )
  }

}
