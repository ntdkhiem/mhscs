import React, { PureComponent } from "react"
import { Helmet } from "react-helmet"
import Particles from "react-particles-js"

import Feature from "../../components/Feature"
import Goal from "../../components/goal"
import TracksList from "../../components/tracks"
import Events from "../../components/events"
import MemberCTA from "../../components/memberCTA"
import Review from "../../components/review"
// import CarouselTest from "../../Pages/Test/test"

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home | MHSCS</title>
        </Helmet>
        <Particles
          style={homeStyle.particles}
          className="d-lg-block d-none"
          params={particlesParams}
        />
        {/* <!-- start banner Area --> */}
        <section className="banner-area relative" id="home" style={homeStyle}>
          <div className="overlay overlay-bg">
            <div className="container">
              <div
                className="row d-flex align-items-center justify-content-between"
                style={{ position: "absolute", top: "32%" }}
              >
                <div className="banner-content col-lg-9 col-md-12">
                  <p className="text-white text-uppercase">
                    Welcome to <b>Malden High School Computer Club</b>
                  </p>
                  <h1 className="text-uppercase">
                    Empowered by{" "}
                    <span className="text-flicker-in-glow">Innovation</span>
                  </h1>
                  <p className="pt-10 pb-10">
                    Want to become a graphic designer or skillful programmer?
                    Join the club and experience great things with many great
                    and popular tools used by computer programmers.
                  </p>
                  <a href="#feature" className="primary-btn text-uppercase">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End banner Area --> */}

        {/* start feature Area */}
        <Feature />
        {/* end feature Area */}

        {/* start our's goal area */}
        <Goal layout="left" />
        {/* end our's goal area */}

        {/* start tracks area */}
        <TracksList />
        {/* end tracks area */}

        {/* <!-- Start search-course Area --> */}
        <section className="search-course-area relative pt-80 pb-80">
          <div className="overlay overlay-bg" />
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6 col-md-6 search-course-left text-white">
                <h1 className="text-white">Who should join us</h1>
                <p>
                  If you are interested in learning more about the endless
                  opportunities the field of Computer Science and Technology
                  have to offer, while also participating in local hackathons.
                </p>
                <div className="row details-content">
                  <div className="col single-detials">
                    <span className="lnr lnr-graduation-hat" />
                    <h4>Curiosity Require</h4>
                    <p>Even though its not true but why not?</p>
                  </div>
                  <div className="col single-detials">
                    <span className="lnr lnr-license" />
                    <h4>Self Teach</h4>
                    <p>
                      Have the ability to teach yourself anything and
                      everything!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 search-course-right section-gap">
                <div className="container text-center">
                  <h4 className="text-white">Club's Rules here</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End search-course Area --> */}

        {/* start upcoming-event area */}
        <Events />
        {/* end upcoming-event area */}

        {/* start member CTA area */}
        <MemberCTA />
        {/* end member CTA area */}

        {/* start review area */}
        <Review />
        {/* end review area */}
      </React.Fragment>
    )
  }
}

let homeStyle = {
  backgroundImage: "url('./assets/img/banner-bg.jpg')",
  particles: {
    width: "100%",
    height: "30vh",
    position: "absolute",
    zIndex: "-1",
  },
}
let particlesParams = {
  fps_limit: 28,
  particles: {
    number: {
      value: 70,
      density: {
        enable: false,
      },
    },
    opacity: {
      value: 0.2,
    },
    line_linked: {
      enable: true,
      opacity: 0.5,
      width: 1.8,
      color: "#1034A6",
      distance: 300,
    },
    shape: {
      stroke: {
        width: 5,
        color: "#0080FF",
      },
    },
    move: {
      direction: "bottom-right",
      random: true,
      out_mode: "out",
      bounce: false,
    },
  },
  retina_detect: true,
}

export default Home
