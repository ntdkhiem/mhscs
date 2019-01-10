import React, { Component } from "react"
import GoogleAnalytics from "react-ga"
import $ from "jquery"

const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID
const PHOTOS_FOLDER_ID = process.env.REACT_APP_GOOGLE_DRIVE_PHOTO_FOLDER_ID
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
GoogleAnalytics.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY)

var google_calendar_url_params = {
  key: API_KEY,
  fields: "items(start, end, summary, description, htmlLink, id)",
}
var google_drive_url_params = {
  key: API_KEY,
  orderBy: "createdTime desc",
  q: `"${PHOTOS_FOLDER_ID}" in parents`,
  pageSize: "6",
  fields: "nextPageToken, files(id)",
}

export const analyticsTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options,
    })
    GoogleAnalytics.pageview(page)
  }

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname + this.props.location.search
      trackPage(page)
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search
      const nextPage = this.props.location.pathname + this.props.location.search

      if (currentPage !== nextPage) {
        trackPage(nextPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return HOC
}

export const getEvents = (WrappedComponent, options = {}) => {
  let google_calendar_url =
    `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?` +
    $.param(google_calendar_url_params)

  if (options.maxResults) {
    google_calendar_url += "&maxResults=" + options.maxResults
  }
  if (options.fromNow) {
    google_calendar_url += "&timeMin=" + new Date().toISOString()
  }
  const HOC = class extends Component {
    state = {
      events: [],
      error: "",
      isLoading: true,
    }
    componentDidMount() {
      fetch(google_calendar_url)
        .then(response => response.json())
        .then(data => {
          let events = this.state.events
          data.items.map(event => {
            return events.push({
              start: event.start.date || event.start.dateTime,
              end: event.end.date || event.end.dateTime,
              title: event.summary,
              description: event.description || "No description.",
              link: event.htmlLink,
              id: event.id,
            })
          })
          this.setState({ events, isLoading: false })
        })
        .catch(error => this.setState({ error, isLoading: false }))
    }
    render() {
      return (
        <WrappedComponent
          events={this.state.events}
          error={this.state.error}
          isLoading={this.state.isLoading}
          {...this.props}
        />
      )
    }
  }
  return HOC
}

export const getPhotos = WrappedComponent => {
  let google_drive_url =
    `https://www.googleapis.com/drive/v3/files?` +
    $.param(google_drive_url_params)

  const HOC = class extends Component {
    state = {
      photos: [],
      pageToken: "",
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
      return (
        <WrappedComponent
          photos={this.state.photos}
          isLoading={this.state.isLoading}
          error={this.state.error}
          morePhotos={this.morePhotos}
          pageToken={this.state.pageToken}
        />
      )
    }
  }
  return HOC
}
