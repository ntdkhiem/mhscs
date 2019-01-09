import React, { PureComponent } from "react"
import Image from "react-image-resizer"
import $ from "jquery"

import Banner from "../components/banner"

const PHOTOS_FOLDER_ID = process.env.REACT_APP_GOOGLE_DRIVE_PHOTO_FOLDER_ID
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY

var google_drive_url_params = {
  key: API_KEY,
  orderBy: "createdTime desc",
  q: `"${PHOTOS_FOLDER_ID}" in parents`,
  pageSize: "6",
  fields: "nextPageToken, files(id)",
}
let google_drive_url =
  `https://www.googleapis.com/drive/v3/files?` +
  $.param(google_drive_url_params)

class Gallery extends PureComponent {
  state = {
    photos: [],
    pageToken: "",
    hasMorePic: false,
    isLoading: true,
    error: false,
  }

  fetchPhotos(token = null) {
    if (token) {
      google_drive_url += "&pageToken=" + token
    }
    fetch(google_drive_url)
      .then(response => response.json())
      .then(data => {
        const photos = this.state.photos
        let newPhotos = []
        data.files.map(file => {
          return newPhotos.push({
            id: file.id,
            thumbNail: `//drive.google.com/thumbnail?id=${
              file.id
            }&sz=w360-h250`,
            link: `//drive.google.com/open?id=${file.id}`,
          })
        })
        this.setState({
          pageToken: data.nextPageToken || "",
          photos: [...photos, ...newPhotos],
          hasMorePic: data.nextPageToken ? true : false,
          isLoading: false,
        })
      })
      .catch(error => this.setState({ error, isLoading: false }))
  }

  componentDidMount() {
    this.fetchPhotos()
  }

  morePhotos = () => {
    this.fetchPhotos(this.state.pageToken)
  }

  render() {
    const { photos, hasMorePic, isLoading, error } = this.state
    let galleryContent
    if (error) {
      galleryContent = <div>Error: please contact us!! ({error.message})</div>
    } else if (isLoading) {
      galleryContent = <div>Loading...</div>
    } else {
      galleryContent = (
        <React.Fragment>
          <div className="row justify-content-center">
            {photos.length !== 0 ? (
              photos.map(photo => (
                <div
                  key={photo.id}
                  className="col-lg-3 col-md-6 col-sm-12 m-3 image-card"
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
          {hasMorePic ? (
            <button
              className="genric-btn primary-border text-uppercase mt-3"
              onClick={this.morePhotos}
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
        {/* <!-- start banner Area --> */}
        <Banner page="Gallery" link="/gallery" />
        {/* <!-- End banner Area --> */}

        {/* <!-- Start gallery Area --> */}
        <section className="gallery-area section-gap">
          <div className="text-center">{galleryContent}</div>
        </section>
        {/* <!-- End gallery Area -->*/}
      </React.Fragment>
    )
  }
}

export default Gallery
