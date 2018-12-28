import request from "superagent"

export function getPhotos(callback, _url = "//127.0.0.1:5000") {
  request.get(`${_url}/photos`).end((err, resp) => {
    if (!err) {
      const photos = []
      JSON.parse(resp.text).files.map(file => {
        return photos.push({
          id: file.id,
          thumbNail: `//drive.google.com/uc?id=${file.id}`,
          link: `//drive.google.com/open?id=${file.id}`,
        })
      })
      callback(photos)
    }
  })
}
