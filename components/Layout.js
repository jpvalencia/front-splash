import React from 'react';
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
              <menu>
                <a href="#">
                  <div className="user"></div>
                  <span>José Miguel</span>
                </a>
                <a href="#">
                  <div className="attach"></div>
                  <span>Docs. adjuntos</span>
                </a>
              </menu>
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
