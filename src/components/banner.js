import React from "react"

const Banner = props => {
  const { page, link } = props
  return (
    <section className="banner-area relative about-banner" id="home">
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="about-content col-lg-12">
            <h1 className="text-white">{page}</h1>
            <p className="text-white link-nav">
              <a href="/">Home </a>
              <span className="lnr lnr-arrow-right" />
              <a href={link}> {page}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
