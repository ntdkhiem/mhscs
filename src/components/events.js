import React, { PureComponent } from "react"
import moment from "moment"
import Container from "./container"
import { getEvents } from "../containers/google"

class Events extends PureComponent {
  render() {
    const { events, error, isLoading } = this.props
    let eventsContent
    if (error) {
      eventsContent = <div>Error: please contact us!! ({error.message})</div>
    } else if (isLoading) {
      eventsContent = <div>Loading...</div>
    } else {
      eventsContent =
        events.length !== 0 ? (
          events.map(event => (
            <div key={event.id} className="col-lg-5">
              <div className="card event-card mt-3 p-4">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <strong>Start</strong>: {moment(event.start).fromNow()}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    <strong>End</strong>:{" "}
                    {moment(event.end).format("MM/DD/YYYY - HH:MM")}
                  </h6>
                  <p className="card-text">{event.description}</p>
                  <a
                    href={event.link}
                    className="card-link genric-btn primary-border"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lead">No Events Found...</p>
        )
    }
    return (
      <Container
        title="Upcoming Events of our Club"
        desc="If you are a serious astronomy fanatic like a lot of us"
        classes="upcoming-event-area pb-120 mt-100 mb-50"
      >
        <div className="row justify-content-center">{eventsContent}</div>
      </Container>
    )
  }
}
export default getEvents(Events, { maxResults: 4, fromNow: true })
