import React from "react"
import Banner from "../components/banner"
import Container from "../components/container"
import moment from "moment"
import { getEvents } from "../containers/gcal"
import "react-big-calendar/lib/css/react-big-calendar.css"
import BigCalendar from "react-big-calendar"
// a localizer for BigCalendar
const localizer = BigCalendar.momentLocalizer(moment)

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
    </span>
  )
}

function EventAgenda({ event }) {
  return (
    <span>
      <h6 style={{ color: "#222" }}>{event.title}</h6>
      <p className="text-lead">{event.description}</p>
    </span>
  )
}

class Events extends React.PureComponent {
  state = {
    events: [],
  }
  componentDidMount() {
    getEvents(events => {
      this.setState({ events })
    })
  }
  render() {
    return (
      <React.Fragment>
        {/* <!-- start banner Area --> */}
        <Banner page="Events" link="/events" />
        {/* <!-- End banner Area --> */}

        {/* <!-- start calendar Area --> */}
        <Container
          title="Calendar"
          desc="Random quote from mysterious"
          classes="calendar-area"
        >
          <BigCalendar
            popup
            localizer={localizer}
            style={{ height: "80vh" }}
            events={this.state.events}
            views={[BigCalendar.Views.MONTH, BigCalendar.Views.AGENDA]}
            components={{
              event: Event,
              agenda: {
                event: EventAgenda,
              },
            }}
          />
        </Container>
        {/* <!-- end calendar Area --> */}
      </React.Fragment>
    )
  }
}
export default Events
