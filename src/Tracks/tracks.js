import React from "react"
import Banner from "../components/banner"
import TracksList from "../components/tracks"

const Tracks = () => {
  return (
    <React.Fragment>
      {/* <!-- start banner Area --> */}
      <Banner page="Tracks" link="/tracks" />
      {/* <!-- End banner Area --> */}

      {/* start popular tracks area */}
      <TracksList />
      {/* end popular tracks area */}
    </React.Fragment>
  )
}

export default Tracks
