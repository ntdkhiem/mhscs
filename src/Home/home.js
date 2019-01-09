import React from "react"
import Particles from "react-particles-js"

import Feature from "../components/Feature"
import Goal from "../components/goal"
import TracksList from "../components/tracks"
import Events from "../components/events"
import MemberCTA from "../components/memberCTA"
import Review from "../components/review"

const Home = () => {
  return (
    <React.Fragment>
      <Particles
        style={homeStyle.particles}
        className="d-lg-block d-none"
        params={particlesParams}
      />
      {/* <!-- start banner Area --> */}
      <section className="banner-area relative" id="home" style={homeStyle}>
        <div className="overlay overlay-bg">
          <div className="container">
            <div className="row fullscreen d-flex align-items-center justify-content-between">
              <div className="banner-content col-lg-9 col-md-12">
                <p className="text-white text-uppercase">
                  Welcome to <b>Malden High School Computer Club</b>
                </p>
                <h1 className="text-uppercase">
                  We Ensure better Education For a better world
                </h1>
                <p className="pt-10 pb-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Excepturi error illo numquam voluptas sapiente tempora ducimus
                  totam eius neque atque?
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
            <div className="col-lg-6 col-md-6 search-course-left">
              <h1 className="text-white">Who should join us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                officia quis, repudiandae deserunt possimus neque cum quasi
                vitae, porro nesciunt, natus quaerat soluta suscipit. Nostrum
                facilis quaerat placeat nam nesciunt!
              </p>
              <div className="row details-content">
                <div className="col single-detials">
                  <span className="lnr lnr-graduation-hat" />
                  <h4>Curiosity Require</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, sint?
                  </p>
                </div>
                <div className="col single-detials">
                  <span className="lnr lnr-license" />
                  <h4>Self Teach</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid illum rerum consequuntur.
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
  },
  retina_detect: true,
}

export default Home
