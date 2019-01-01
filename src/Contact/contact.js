import React from "react"
import Banner from "../components/banner"

const Contact = () => {
  return (
    <React.Fragment>
      {/* <!-- start banner Area --> */}
      <Banner page="Gallery" link="/gallery" />
      {/* <!-- End banner Area --> */}

      {/* start contact area */}
      <section className="contact-page-area section-gap">
        <div className="container">
          <h4>Contact currently unavailable</h4>
          <div className="row">
            <div className="col-lg-4 d-flex flex-column address-wrap">
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-home" />
                </div>
                <div className="contact-details">
                  <h5>Malden, Massachusetts</h5>
                  <p>77 Salem St, Malden, MA 02148</p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-phone-handset" />
                </div>
                <div className="contact-details">
                  <h5>00 (958) 9865 562</h5>
                  <p>
                    Every <b>Wednesday</b>
                  </p>
                </div>
              </div>
              <div className="single-contact-address d-flex flex-row">
                <div className="icon">
                  <span className="lnr lnr-envelope" />
                </div>
                <div className="contact-details">
                  <h5>mhscclub@gmail.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form className="form-area contact-form text-right" id="myForm">
                <div className="row">
                  <div className="col-lg-6 form-group">
                    <input
                      name="name"
                      placeholder="Enter your name"
                      className="common-input mb-20 form-control"
                      required
                      type="text"
                    />

                    <input
                      name="email"
                      placeholder="Enter email address"
                      pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                      className="common-input mb-20 form-control"
                      required
                      type="email"
                    />

                    <input
                      name="subject"
                      placeholder="Enter subject"
                      className="common-input mb-20 form-control"
                      required
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <textarea
                      className="common-textarea form-control"
                      name="message"
                      placeholder="Enter Messege"
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="alert-msg" style={{ textAlign: "left" }} />
                    <button
                      className="genric-btn primary"
                      style={{ float: "right" }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* end contact area */}
    </React.Fragment>
  )
}

export default Contact
