import React, { Component, Fragment } from "react"
import { Router, Route, Switch, Link } from "react-router-dom"

// import the Home component to be used below
import Home from "./Home/Home"

import createBrowserHistory from "history/createBrowserHistory"
import "./scss/main.scss"

const history = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <header id="header">
            <div className="header-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                    <ul>
                      <li>
                        <a href="!#">
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
                      <span className="fa fa-envelope" />{" "}
                      <span className="text">mhscclub@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container main-menu">
              <div className="row align-items-center justify-content-between d-flex">
                <div className="logo">
                  <Link to="/">
                    <img src="/assets/img/icon.png" alt="logo" />
                  </Link>
                </div>
                <nav id="nav-menu-container">
                  <ul className="nav-menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/tracks">Tracks</Link>
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
            </Switch>
          </section>
        </Fragment>
      </Router>
    )
  }
}

export default App
