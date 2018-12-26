import React from "react"
import Feature from "../components/feature"
import Goal from "../components/goal"
import Tracks from "../components/tracks"
import Events from "../components/events"
import Slack from "../components/slack"
import Footer from "../components/footer"

function App() {
  return (
    <React.Fragment>
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
                <a href="!#" className="primary-btn text-uppercase">
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
      <Tracks />
      {/* end tracks area */}

      {/* start upcoming-event area */}
      <Events />
      {/* end upcoming-event area */}

      {/* start slack-invitation area */}
      <Slack />
      {/* end slack-invitation area */}

      {/* start footer area */}
      <Footer/>
      {/* end footer area */}

    </React.Fragment>
  )
}

let homeStyle = {
  backgroundImage: "url('./assets/img/banner-bg.jpg')",
}

export default App
