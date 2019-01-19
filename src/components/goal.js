import React from "react"

const Text = () => {
  return (
    <React.Fragment>
      <h1 className="pb-2">Our Purpose</h1>
      <p>
        The Computer Club is dedicated to exposing students to the computer
        programming by providing students the opportunity to be involved in STEM
        activities focused on technology including but not limited to
        algorithmic and computational thinking.
      </p>
      <br />
      <p>
        Students will have the opportunity to experience multiple computer /
        information technologies that they may not have had a chance to work
        with during regular technology education classes. Students will be able
        to get hand on many tech tools such as{" "}
        <a
          href="https://www.adobe.com/products/photoshop.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adobe Photoshop
        </a>{" "}
        Game Maker and understand more about computer through disecting it apart
        and learn how to defend yourself from cyber attack with experienced
        people.
      </p>
      <br />
      <p>
        The Computer Club frequently participates in external competitions or
        hackathons such as{" "}
        <a
          href="https://mahacks.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MAHacks
        </a>{" "}
        and{" "}
        <a
          href="https://metrohacks.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MetroHacks
        </a>{" "}
        as well as{" "}
        <a
          href="https://blueprint.hackmit.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blueprint
        </a>
        . The members can gain valuable experiences and skills through
        participation in these hackathons.
      </p>
    </React.Fragment>
  )
}

const Image = () => {
  return <img className="img-fluid" src="/assets/img/about-img.jpg" alt="" />
}

const Goal = props => {
  return (
    <section className="info-area pb-120">
      {props.layout === "right" ? (
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 no-padding info-area-left">
              <Image />
            </div>
            <div className="col-lg-6 info-area-right">
              <Text />
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="container white-bg">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <Text />
              </div>
              <div className="col-lg-5 no-padding pt-5">
                <Image />
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </section>
  )
}

export default Goal
