import React from "react"

const Feature = () => {
  return (
    <section className="feature-area pb-120" id="feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="single-feature">
              <div className="title">
                <h4>Teach By Students</h4>
              </div>
              <div className="desc-wrap">
                <p>
                  Learn faster and adapt easier and more comfortable in the
                  environment if your teacher is <b>YOUR FRIEND</b>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-feature">
              <div className="title">
                <h4>Free Courses</h4>
              </div>
              <div className="desc-wrap">
                <p>
                  Students will be able to learn from a more experienced student
                  in a specific track for <b>FREE</b>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-feature">
              <div className="title">
                <h4>Great Lessons</h4>
              </div>
              <div className="desc-wrap">
                <p>
                  Lessons were trials and errors from the real world that
                  "teachers" willing to share for others to{" "}
                  <b>LEARN AND AVOID</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
