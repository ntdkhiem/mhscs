import React from "react"

/**
 * @render react
 * @name feature
 * @description `Feature` for `Home` page and `About` page
 * @example
 * <Feature />
 */

const Feature = () => {
  return (
    <section className="feature-area pb-120" id="feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="single-feature">
              <div className="title">
                <h4>Taught By Students</h4>
              </div>
              <div className="desc-wrap">
                <p>
                  Learn in a comfortable and exciting environment taught by
                  students <b> FOR STUDENTS </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-feature">
              <div className="title">
                <h4>Excellent Programs</h4>
              </div>
              <div className="desc-wrap">
                <p>
                  Students have the opportunity to <b>EXPLORE AREAS</b> in
                  Computer Science that are normally left out in high school.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-feature">
              <div className="title">
                <h4>Amazing Opportunities</h4>
              </div>
              <div className="desc-wrap">
                <p>
                  From the <b>Hackathon competitions</b> to the lectures from
                  the biggest local software engineers and professors.
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
