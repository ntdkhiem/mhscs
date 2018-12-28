import React, { PureComponent } from "react"
import moment from "moment"
import Container from "./container"
import { getEvents } from "../containers/gcal"

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
        classes="upcoming-event-area pb-120"
      >
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {events.map((event, index) => (
              <div key={index} className="card border-primary mt-3">
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
                    href="!#"
                    className="card-link genric-btn default circle arrow"
                  >
                    Remind me
                  </a>
                  <a href="!#" className="card-link genric-btn primary-border">
                    Subscribe
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    )
  }
}
export default Events
