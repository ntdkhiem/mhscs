import React from "react"
import Container from "./container"
import Carusel from "./carusel"
import Card from "./card"

const TracksList = () => {
  return (
    <Container
      title="Popular Tracks we offer"
      desc="There is a moment in the life of any aspiring."
      classes="popular-course-area section-gap"
    >
      <div className="row">
        <Carusel>
          <Card
            imgSrc="/assets/img/p1.jpg"
            meta="Kevin Nguyen"
            title="Cyber Security"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
                ad sequi exercitationem nobis vitae molestias atque quam
                repellendus saepe necessitatibus?"
          />
          <Card
            imgSrc="/assets/img/p2.jpg"
            meta="Mohsin Braer"
            title="Algorithm"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            distinctio ad dicta est nam mollitia! Quod ut cum hic esse."
          />
          <Card
            imgSrc="/assets/img/p3.jpg"
            meta="Felix Li"
            title="Graphic"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            consequuntur commodi eveniet qui omnis nemo ducimus laboriosam
            dolor aperiam deleniti!"
          />
          <Card
            imgSrc="/assets/img/p4.jpg"
            meta="Jack Williams"
            title="Hardware"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            consequuntur commodi eveniet qui omnis nemo ducimus laboriosam
            dolor aperiam deleniti!"
          />
        </Carusel>
      </div>
    </Container>
  )
}

export default TracksList
