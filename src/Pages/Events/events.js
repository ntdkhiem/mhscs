import React, { PureComponent } from "react"
import { Helmet } from "react-helmet"
import moment from "moment"
import BigCalendar from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"

import Banner from "../../components/banner"
import Container from "../../components/container"
import { getEvents } from "../../containers/google"
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

class Events extends PureComponent {
  render() {
    const { events, error, isLoading } = this.props
    let calendarArea
    if (error) {
      calendarArea = (
        <div className="text-center text-danger">
          Error: please contact us!! ({error.message})
        </div>
      )
    } else if (isLoading) {
      calendarArea = <div className="text-center">Loading...</div>
    } else {
      calendarArea = (
        <BigCalendar
          popup
          localizer={localizer}
          style={{ height: "80vh" }}
          events={events}
          views={[BigCalendar.Views.MONTH, BigCalendar.Views.AGENDA]}
          defaultView="agenda"
          components={{
            event: Event,
            agenda: {
              event: EventAgenda,
            },
          }}
        />
      )
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>Events | MHSCS</title>
        </Helmet>

        {/* <!-- start banner Area --> */}
        <Banner page="Events" link="/events" />
        {/* <!-- End banner Area --> */}

        {/* <!-- start calendar Area --> */}
        <Container
          title="Calendar"
          desc="Random quote from mysterious"
          classes="calendar-area"
        >
          {calendarArea}
        </Container>
        {/* <!-- end calendar Area --> */}
      </React.Fragment>
    )
  }
}
export default getEvents(Events, {})
