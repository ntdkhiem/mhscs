import React from "react"

const Goal = props => {
  return (
    <section className="info-area pb-120">
      {props.layout === "right" ? (
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 no-padding info-area-left">
              <img
                className="img-fluid"
                src="/assets/img/about-img.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6 info-area-right">
              <h1>Our Purpose</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, eos. Soluta numquam iure culpa voluptatum dolore
                saepe laudantium aliquid accusantium architecto iusto?
                Obcaecati, optio adipisci ratione voluptatum dolores iusto
                ducimus natus,
              </p>
              <br />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, eos. Soluta numquam iure culpa voluptatum dolore
                saepe laudantium aliquid accusantium architecto iusto?
                Obcaecati, optio adipisci ratione voluptatum dolores iusto
                ducimus natus, Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Repudiandae, eos. Soluta numquam iure culpa
                voluptatum dolore saepe laudantium aliquid accusantium
                architecto iusto? Obcaecati, optio adipisci ratione voluptatum
                dolores iusto ducimus natus,
              </p>
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h1 className="pb-2">Our Purpose</h1>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach.
                </p>
                <br />
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed off as “boys will be boys,” women face higher
                  conduct standards especially in the workplace. That’s why it’s
                  crucial that, as women, our behavior on the job is beyond
                  reproach.
                </p>
              </div>
              <div className="col-lg-5 no-padding pt-5">
                <img
                  className="img-fluid"
                  src="/assets/img/about-img.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </section>
  )
}

export default Goal
