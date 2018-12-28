import React from "react"

function Footer() {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>MHS COMPUTER CULB</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora facilis corrupti ab voluptas perspiciatis
                repudiandae corporis nulla. Consequuntur, facere?
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="!#">Members</a>
                </li>
                <li>
                  <a href="!#">Gallery</a>
                </li>
                <li>
                  <a href="!#">Calendar</a>
                </li>
                <li>
                  <a href="!#">Club's Policy</a>
                </li>
                <li>
                  <a href="!#">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="single-footer-widget">
              <h4>Feedback</h4>
              <p>Send us some feedback.</p>
              <form action="#">
                <div className="mt-10">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="single-input"
                    required
                  />
                </div>
                <div className="mt-10">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="single-input"
                    required
                  />
                </div>
                <div className="mt-10">
                  <textarea
                    placeholder="Message"
                    className="single-textarea"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="genric-btn primary mt-10 btn-block"
                >
                  Submit <i className="fa fa-arrow-right ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom row align-items-center justify-content-between">
          <p className="footer-text m-0 col-lg-6 col-md-12">
            Copyright &copy; 2018 All rights reserved{" "}
            <span className="text-black">
              | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by Colorlib
            </span>
          </p>
          <div className="col-lg-6 col-sm-12 footer-social">
            <a href="!#">
              <i className="fa fa-slack" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
