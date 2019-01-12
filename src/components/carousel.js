import React, { PureComponent } from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
let defaultOptions = {
  items: 4,
  margin: 30,
  loop: true,
  dots: true,
  autoplayHoverPause: true,
  smartSpeed: 650,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 4,
    },
  },
}

class Carousel extends PureComponent {
  render() {
    let options = this.props.options || defaultOptions
    return (
      <OwlCarousel className="carousel-area" {...options}>
        {this.props.children}
      </OwlCarousel>
    )
  }
}

export default Carousel
