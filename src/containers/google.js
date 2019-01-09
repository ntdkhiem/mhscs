import request from "superagent"
import $ from "jquery"

const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
var google_calendar_url_params = {
  key: API_KEY,
  timeMin: new Date().toISOString(),
  fields: "items(start, end, summary, description, htmlLink, id)",
}
let google_calendar_url =
  `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?` +
  $.param(google_calendar_url_params)

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
          id: event.id,
        })
      })
      callback(events)
    }
  })
}
