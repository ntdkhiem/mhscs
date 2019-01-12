import React from "react"
import { Helmet } from "react-helmet"

import Banner from "../../components/banner"
import TracksList from "../../components/tracks"
const Tracks = () => {
  // render() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Tracks | MHSCS</title>
      </Helmet>

      {/* <!-- start banner Area --> */}
      <Banner page="Tracks" link="/tracks" />
      {/* <!-- End banner Area --> */}

      {/* start popular tracks area */}
      <TracksList />
      {/* end popular tracks area */}
    </React.Fragment>
  )
  // }
}

export default Tracks
