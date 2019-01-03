import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
// import Pages to be used below
import Home from "./Home/home"
import About from "./About/about"
import Tracks from "./Tracks/tracks"
import Gallery from "./Gallery/gallery"
import Events from "./Events/events"
import Contact from "./Contact/contact"
import TermsService from "./SubPages/termsService"
import NotFound from "./NotFound/notFound"

// import components to be used below
import Slack from "./components/Slack"
import Footer from "./components/Footer"

import "./scss/main.scss"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <header id="header">
            <div className="header-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                    <ul>
                      <li>
                        <a className="icon" href="!#">
                          <i className="fa fa-slack" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                    <a href="tel:+953 012 3654 896">
                      <span className="fa fa-phone" />
                      <span className="text">+953 012 3654 896</span>
                    </a>
                    <a href="!#">
                      <span className="fa fa-envelope" />
                      <span className="text pl-1">mhscclub@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container main-menu">
              <div className="row align-items-center justify-content-between d-flex">
                <div className="logo">
                  <a href="/">
                    <img src="/assets/img/icon.png" alt="logo" />
                  </a>
                </div>
                <nav id="nav-menu-container">
                  <ul className="nav-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/tracks">Tracks</a>
                    </li>
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <section className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/tracks" component={Tracks} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/events" component={Events} />
              <Route path="/contact" component={Contact} />
              <Route path="/terms" component={TermsService} />
              <Route path="*" component={NotFound} />
            </Switch>
          </section>
          {/* start slack-invitation area */}
          <Slack />
          {/* end slack-invitation area */}

          {/* start footer area */}
          <Footer />
          {/* end footer area */}
        </Fragment>
      </Router>
    )
  }
}

export default App
