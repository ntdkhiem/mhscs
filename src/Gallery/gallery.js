import React, { PureComponent } from "react"
import Image from "react-image-resizer"

import { getPhotos } from "../containers/google"
import Banner from "../components/banner"

class Gallery extends PureComponent {
  state = {
    photos: [],
    pageToken: "",
    hasMorePic: false,
  }

  componentDidMount() {
    getPhotos(photos => {
      photos = this.isTokenExist(photos)
      this.setState({ photos })
    })
  }

  isTokenExist = photos => {
    if (typeof photos[photos.length - 1] == "string") {
      const pageToken = photos[photos.length - 1]
      photos = photos.slice(0, photos.length - 1)
      this.setState({ pageToken, hasMorePic: true })
    } else {
      this.setState({ hasMorePic: false })
    }
    return photos
  }

  morePhotos = () => {
    this.setState({ hasMorePic: false })
  }

  render() {
    const { photos, hasMorePic } = this.state
    return (
      <React.Fragment>
        {/* <!-- start banner Area --> */}
        <Banner page="Gallery" link="/gallery" />
        {/* <!-- End banner Area --> */}

        {/* <!-- Start gallery Area --> */}
        <section className="gallery-area section-gap">
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              {photos.length !== 0 ? (
                photos.map(photo => (
                  <div key={photo.id} className="col-lg-3 m-3 image-card">
                    <a
                      href={photo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="img-gal"
                    >
                      <Image src={photo.thumbNail} width={360} height={250} />
                    </a>
                  </div>
                ))(
                  hasMorePic ? (
                    <button
                      className="genric-btn primary-border text-uppercase mt-3"
                      onClick={this.morePhotos}
                    >
                      Load more
                    </button>
                  ) : (
                    <p>No more image...</p>
                  ),
                )
              ) : (
                <p className="text-lead">No Images Found...</p>
              )}
            </div>
          </div>
        </section>
        {/* <!-- End gallery Area -->*/}
      </React.Fragment>
    )
  }
}

export default Gallery
