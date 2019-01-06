import React from "react"

const Text = () => {
  return (
    <React.Fragment>
      <h1 className="pb-2">Our Purpose</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        eos. Soluta numquam iure culpa voluptatum dolore saepe laudantium
        aliquid accusantium architecto iusto? Obcaecati, optio adipisci ratione
        voluptatum dolores iusto ducimus natus,
      </p>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        eos. Soluta numquam iure culpa voluptatum dolore saepe laudantium
        aliquid accusantium architecto iusto? Obcaecati, optio adipisci ratione
        voluptatum dolores iusto ducimus natus, Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Repudiandae, eos. Soluta numquam iure
        culpa voluptatum dolore saepe laudantium aliquid accusantium architecto
        iusto? Obcaecati, optio adipisci ratione voluptatum dolores iusto
        ducimus natus,
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
          <div className="container">
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
