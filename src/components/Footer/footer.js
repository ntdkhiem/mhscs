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
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                  <a href="!#">Club's Policy</a>
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
            Copyright &copy; 2018 All rights reserved{" "}
            <span style={{ color: "rgba(255,255,255,0.2)" }}>
              | template by Colorlib
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
