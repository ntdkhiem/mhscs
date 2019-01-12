import React from 'react'

import Carousel from './carousel'

let options = {
	items: 2,
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
    },
}

const Review = () => {
  return (
			<section className="review-area section-gap relative">
				<div className="overlay overlay-bg"></div>
				<div className="container">				
					<div className="row">
						<Carousel options={options}> 
							<div className="single-review item">
								<div className="title justify-content-start d-flex">
									<h4>Fannie Rowe</h4>
									<div className="star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div className="single-review item">
								<div className="title justify-content-start d-flex">
									<h4>Hulda Sutton</h4>
									<div className="star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div className="single-review item">
								<div className="title justify-content-start d-flex">
									<h4>Fannie Rowe</h4>
									<div className="star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div className="single-review item">
								<div className="title justify-content-start d-flex">
									<h4>Hulda Sutton</h4>
									<div className="star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>	
							<div className="single-review item">
								<div className="title justify-content-start d-flex">
									<h4>Fannie Rowe</h4>
									<div className="star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div className="single-review item">
								<div className="title justify-content-start d-flex">
									<h4>Hulda Sutton</h4>
									<div className="star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div className="single-review item">
								<div className="title justify-content-start d-flex">
									<h4>Fannie Rowe</h4>
									<div className="star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>
							<div className="single-review item">
								<div className="title justify-content-start d-flex">
									<h4>Hulda Sutton</h4>
									<div className="star">
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star checked"></span>
										<span className="fa fa-star"></span>
										<span className="fa fa-star"></span>
									</div>
								</div>
								<p>
									Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.
								</p>
							</div>																												
						</Carousel>
					</div>
				</div>	
			</section>
    )
}

export default Review
