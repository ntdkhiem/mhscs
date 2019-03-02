import React, { PureComponent, Fragment } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
// import Pages to be used below
import Home from "./Pages/Home/home"
import About from "./Pages/About/about"
import Tracks from "./Pages/Tracks/tracks"
import Events from "./Pages/Events/events"
import Gallery from "./Pages/Gallery/gallery"
import Contact from "./Pages/Contact/contact"
import NotFound from "./Pages/NotFound/notFound"
import TermsService from "./Pages/SubPages/termsService"

// import components to be used below
import { analyticsTracker } from "./containers/google"
import Slack from "./components/Slack"
import Footer from "./components/Footer"

import "./scss/main.scss"

class App extends PureComponent {
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
                        <a className="icon" href="#!">
                          <i className="fa fa-slack" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                    <a href="mailto:computerclubmalden@gmail.com">
                      <span className="fa fa-envelope" />
                      <span className="text pl-1">
                        computerclubmalden@gmail.com
                      </span>
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
                      <a
                        href="https://github.com/mhscc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Projects
                      </a>
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
              <Route exact path="/" component={analyticsTracker(Home)} />
              <Route path="/about" component={analyticsTracker(About)} />
              <Route path="/tracks" component={analyticsTracker(Tracks)} />
              <Route path="/gallery" component={analyticsTracker(Gallery)} />
              <Route path="/events" component={analyticsTracker(Events)} />
              <Route path="/contact" component={analyticsTracker(Contact)} />
              <Route path="/terms" component={analyticsTracker(TermsService)} />
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
