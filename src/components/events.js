import React, { PureComponent } from "react"
import moment from "moment"
import Container from "./container"
import { getEvents } from "../containers/google"

class Events extends PureComponent {
  state = {
    events: [],
  }

  componentDidMount() {
    getEvents((events, _maxResults = 1) => {
      this.setState({ events })
    })
  }

  performCounting = datetime => {
    let time = moment(datetime)
    if (time.isValid()) {
      setInterval(function() {
        console.log(time.format("HH:MM:SS"))
      }, 1000)
    } else {
      console.log(time.format("MM/DD/YYYY - HH:MM"))
    }
  }

  render() {
    const { events } = this.state
    return (
      <Container
        title="Upcoming Events of our Club"
        desc="If you are a serious astronomy fanatic like a lot of us"
        classes="upcoming-event-area pb-120 mt-100 mb-50"
      >
        <div className="row justify-content-center">
          {events.length !== 0 ? (
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
          )}
        </div>
      </Container>
    )
  }
}
export default Events
