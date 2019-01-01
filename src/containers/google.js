import request from "superagent"
import $ from "jquery"

const CALENDAR_ID = "0gvfrnaahon9k8csfuq6n44uq0@group.calendar.google.com"
const PHOTOS_FOLDER_ID = "1khIzqhcnCLTEVv7tTxHiVBdhWM74mY7V"
const API_KEY = "AIzaSyBz7ooxpS0fB7q5XZLCrsQR_vON7LXzHG0"
let google_calendar_url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
var google_drive_url_params = {
  key: API_KEY,
  q: `"${PHOTOS_FOLDER_ID}" in parents`,
  fields: "nextPageToken, files(id)",
}
let google_drive_url =
  `https://www.googleapis.com/drive/v3/files?` +
  $.param(google_drive_url_params)

export function getEvents(callback, _maxResults = null) {
  if (_maxResults) {
    google_calendar_url += "&maxResults=" + _maxResults
  }
  request.get(google_calendar_url).end((err, resp) => {
    if (!err) {
      const events = []
      JSON.parse(resp.text).items.map(event => {
        return events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
          description: event.description || "No description.",
          link: event.htmlLink,
        })
      })
      callback(events)
    }
  })
}

export function getPhotos(callback) {
  request.get(`${google_drive_url}`).end((err, resp) => {
    if (!err) {
      const photos = []
      JSON.parse(resp.text).files.map(file => {
        return photos.push({
          id: file.id,
          thumbNail: `//drive.google.com/thumbnail?id=${file.id}&sz=w360-h250`,
          link: `//drive.google.com/open?id=${file.id}`,
        })
      })
      callback(photos)
    }
  })
}
