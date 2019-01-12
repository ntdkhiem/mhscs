import React, { PureComponent } from "react"
import { Helmet } from "react-helmet"
import Image from "react-image-resizer"
import Loader from "react-loaders"

import Banner from "../../components/banner"
import { getPhotos } from "../../containers/google"

class Gallery extends PureComponent {
  render() {
    const { photos, pageToken, isLoading, error, morePhotos } = this.props
    let galleryContent
    if (error) {
      galleryContent = <div>Error: please contact us!! ({error.message})</div>
    } else if (isLoading) {
      galleryContent = <Loader type="pacman" active={isLoading} />
    } else {
      galleryContent = (
        <React.Fragment>
          <div className="row justify-content-center">
            {photos.length !== 0 ? (
              photos.map(photo => (
                <div
                  key={photo.id}
                  className="col-lg-3 col-md-4 col-sm-8 m-3 image-card"
                >
                  <a
                    href={photo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="img-gal"
                  >
                    <Image src={photo.thumbNail} width={360} height={250} />
                  </a>
                </div>
              ))
            ) : (
              <p className="text-lead">No Images Found...</p>
            )}
          </div>
          {pageToken !== "" ? (
            <button
              className="genric-btn primary-border text-uppercase mt-3"
              onClick={morePhotos}
            >
              Load more
            </button>
          ) : (
            <p>No more image...</p>
          )}
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>Gallery | MHSCS</title>
        </Helmet>

        {/* <!-- start banner Area --> */}
        <Banner page="Gallery" link="/gallery" />
        {/* <!-- End banner Area --> */}

        {/* <!-- Start gallery Area --> */}
        <section className="gallery-area section-gap">
          <div className="container-fluid text-center">{galleryContent}</div>
        </section>
        {/* <!-- End gallery Area -->*/}
      </React.Fragment>
    )
  }
}

export default getPhotos(Gallery)
