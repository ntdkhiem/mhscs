import React from "react"
import Container from "./container"
import Carousel from "./carousel"
import Card from "./card"

const TracksList = () => {
  return (
    <Container
      title="Popular Tracks we offer"
      desc="There is a moment in the life of any aspiring."
      classes="tracks-area section-gap"
    >
      <div className="row">
        <Carousel>
          <Card
            imgSrc="/assets/img/tracks/cyber.jpg"
            meta="Kevin Nguyen"
            title="Cyber Security"
            desc="The goal of this track is to help you understand how cyber attacks work and how to defend yourself by do and think as a hacker."
          />
          <Card
            imgSrc="/assets/img/tracks/algorithms.jpg"
            meta="Mohsin Braer"
            title="Algorithms"
            desc="Explore a concept essential to programming for making your computer program as effecient as possible"
          />
          <Card
            imgSrc="/assets/img/tracks/graphics.jpg"
            meta="Felix Li"
            title="Graphic"
            desc="The goal of the Graphics track is to perfect skills of effective design and user interfacing through software such as Photoshop and Illustrator."
          />
          <Card
            imgSrc="/assets/img/tracks/hardware.jpg"
            meta="Jack Williams"
            title="Hardware"
            desc="This track will focus on the main components of a computer, as well as address how a mix of hardware and software is used to communicate between computers."
          />
        </Carousel>
      </div>
    </Container>
  )
}

export default TracksList
