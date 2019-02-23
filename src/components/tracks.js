import React from "react"
import Container from "./container"
import Carousel from "./carousel"
import Card from "./card"

const TracksList = () => {
  return (
    <Container
      title="Popular Tracks we offer"
      desc="These are tracks that we will cover for now. Any new track will be update automatically."
      classes="tracks-area section-gap"
    >
      <div className="row">
        <Carousel>
          <Card
            imgSrc="/assets/img/tracks/cyber.jpg"
            meta="Kevin Nguyen, Jack Williams"
            title="Cyber Security"
            desc="The goal of this course is to help you understand how Cyber Intrusions Function, and how to defend yourself against these attacks. Think as a hacker yourself!"
          />
          <Card
            imgSrc="/assets/img/tracks/algorithms.jpg"
            meta="Mohsin Braer, Jacky Luong"
            title="Algorithms"
            desc="Explore a concept essential to programming for making your computer program as effecient as possible"
          />
          <Card
            imgSrc="/assets/img/tracks/graphics.jpg"
            meta="Felix Li"
            title="Graphic"
            desc="The goal of the Graphics track is to perfect skills of effective design and user interfacing through software such as Photoshop and Illustrator."
          />
        </Carousel>
      </div>
    </Container>
  )
}

export default TracksList
