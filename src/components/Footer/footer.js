import React from "react"
import { Link } from "react-router-dom"

import ContactForm from "../Forms/contact"

/**
 * @render react
 * @name Footer
 * @description `Footer` for every page
 * @example
 * <Footer />
 */

const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>MHS COMPUTER CULB</h4>
              <p>
                The Computer Club is dedicated to exposing students to the
                computer programming by providing students the opportunity to be
                involved in STEM activities focused on technology including but
                not limited to algorithmic and computational thinking.
              </p>
              <h4 className="mt-5 mb-3">Support us</h4>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="DA8E8J294SFF2"
                />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                  border="0"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="single-footer-widget">
              <h4>Feedback</h4>
              <p>Send us some feedback.</p>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="footer-bottom row align-items-center justify-content-between">
          <p className="footer-text m-0 col-lg-6 col-md-12">
            Copyright &copy; 2019 All rights reserved | template by Colorlib |
            by Kevin Nguyen
          </p>
          <div className="col-lg-6 col-sm-12 footer-social">
            <a href="#!">
              <i className="fa fa-slack" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
