import React, { PureComponent } from "react"
import { getPhotos } from "../containers/backend"
import Banner from "../components/banner"

class Gallery extends PureComponent {
  state = {
    photos: [],
  }

  componentDidMount() {
    getPhotos((photos, _url = "//127.0.0.1:5000") => {
      this.setState({ photos })
    })
  }
  render() {
    const { photos } = this.state
    return (
      <React.Fragment>
        {/* <!-- start banner Area --> */}
        <Banner page="Gallery" link="/gallery" />
        {/* <!-- End banner Area --> */}

        {/* <!-- Start gallery Area --> */}
        <section className="gallery-area section-gap">
          <div className="container text-center">
            <div className="row">
              {photos.map(photo => (
                <div key={photo.id} className="col-lg-4">
                  <a
                    href={photo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="img-gal"
                  >
                    <div className="single-imgs relative">
                      <div className="overlay overlay-bg" />
                      <div className="relative">
                        <img
                          src={photo.thumbNail}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <a href="!#" className="genric-btn primary-border text-uppercase">
              Load more
            </a>
          </div>
        </section>
        {/* <!-- End gallery Area -->*/}
      </React.Fragment>
    )
  }
}

export default Gallery
