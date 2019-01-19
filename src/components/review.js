import React from "react"

import Carousel from "./carousel"

let options = {
  items: 2,
  margin: 30,
  loop: true,
  dots: true,
  autoplayHoverPause: true,
  smartSpeed: 650,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
}

const Review = () => {
  return (
    <section className="review-area section-gap relative">
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row">
          <Carousel options={options}>
            <div className="single-review item">
              <div className="title justify-content-start d-flex">
                <h4>Kevin Nguyen</h4>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                </div>
              </div>
              <p>
                I really enjoy participate into this club because members are
                nice and officers are really helpful while I can learn many
                things and skills.
              </p>
            </div>
            <div className="single-review item">
              <div className="title justify-content-start d-flex">
                <h4>Felix Li</h4>
                <div className="star">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                </div>
              </div>
              <p>
                The Computer Club is great for everyone and I would like to
                recommend to join
              </p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Review
