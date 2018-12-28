import React from "react"

const Card = props => {
  const { classes } = props || ""
  const { imgSrc, meta, title, desc } = props
  return (
    <div className={"single-popular-carusel " + classes}>
      <div className="thumb-wrap relative">
        <div className="thumb relative">
          <div className="overlay overlay-bg" />
          <img className="img-fluid" src={imgSrc} alt="" />
        </div>
        <div className="meta d-flex justify-content-between">
          <p>
            <span className="lnr lnr-users" /> {meta}
          </p>
        </div>
      </div>
      <div className="details">
        <a href="!#">
          <h4>{title}</h4>
        </a>
        <p>{desc}</p>
        {props.children}
      </div>
    </div>
  )
}

export default Card
