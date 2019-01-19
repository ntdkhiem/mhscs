import React from "react"

const Card = props => {
  const { classes } = props || ""
  const { imgSrc, meta, title, desc } = props
  return (
    <div className={"single-item-carousel " + classes}>
      <div className="thumb-wrap relative">
        <div className="thumb relative">
          <img className="img-fluid" src={imgSrc} alt="" />
          <div className="overlay overlay-bg" />
        </div>
        <div className="meta d-flex justify-content-between">
          <p>
            <span className="lnr lnr-users" /> {meta}
          </p>
        </div>
      </div>
      <div className="details">
        <a href="#!">
          <h4>{title}</h4>
        </a>
        <p className="text-dark">{desc}</p>
        {props.children}
      </div>
    </div>
  )
}

export default Card
