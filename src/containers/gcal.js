import request from "superagent"

const CALENDAR_ID = "0gvfrnaahon9k8csfuq6n44uq0@group.calendar.google.com"
const API_KEY = "AIzaSyBz7ooxpS0fB7q5XZLCrsQR_vON7LXzHG0"
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents(callback, _maxResults = null) {
  if (_maxResults) {
    url += "&maxResults=" + _maxResults
  }
  request.get(url).end((err, resp) => {
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
