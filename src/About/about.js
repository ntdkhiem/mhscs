import React from "react"
import Banner from "../components/banner"
import Feature from "../components/Feature"
import Goal from "../components/goal"
import Container from "../components/container"
import Carusel from "../components/carusel"
import Card from "../components/card"
import MemberCTA from "../components/memberCTA"
import Review from "../components/review"

const About = () => {
  return (
    <React.Fragment>
      {/* <!-- start banner Area --> */}
      <Banner page="About Us" link="/home" />
      {/* <!-- End banner Area --> */}

      {/* start feature Area */}
      <Feature />
      {/* end feature Area */}

      {/* start our's goal area */}
      <Goal layout="right" />
      {/* end our's goal area */}

      {/* start officers area */}
      <Container
        title="Who We Are"
        desc="There is no place like 127.0.0.1"
        classes="officers-area pb-120 popular-course-area"
      >
        <div className="row justify-content-center">
          <Card
            classes="col-lg-4 col-md-5 col-sm-6"
            imgSrc="/assets/img/p1.jpg"
            meta="Advisor"
            title="Paul Marques"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                distinctio voluptatibus placeat obcaecati necessitatibus, unde
                iste optio magni minima veniam!"
          >
            <ul class="list-inline social-links">
              <li class="list-inline-item">
                <a href="!#">
                  <i class="fa fa-facebook" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="!#">
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="!#">
                  <i class="fa fa-dribbble" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="!#">
                  <i class="fa fa-behance" />
                </a>
              </li>
            </ul>
          </Card>
        </div>
        <div className="row pt-5">
          <Carusel>
            <Card
              imgSrc="/assets/img/p1.jpg"
              meta="President"
              title="Mohsin Braer"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                  distinctio voluptatibus placeat obcaecati necessitatibus, unde
                  iste optio magni minima veniam!"
            >
              <ul class="list-inline social-links">
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-behance" />
                  </a>
                </li>
              </ul>
            </Card>
            <Card
              imgSrc="/assets/img/p2.jpg"
              meta="Vice President"
              title="Jacky Luong"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                  distinctio voluptatibus placeat obcaecati necessitatibus, unde
                  iste optio magni minima veniam!"
            >
              <ul class="list-inline social-links">
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-behance" />
                  </a>
                </li>
              </ul>
            </Card>
            <Card
              imgSrc="/assets/img/p3.jpg"
              meta="Hardware Officer"
              title="Jack Williams"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                  distinctio voluptatibus placeat obcaecati necessitatibus, unde
                  iste optio magni minima veniam!"
            >
              <ul class="list-inline social-links">
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-behance" />
                  </a>
                </li>
              </ul>
            </Card>
            <Card
              imgSrc="/assets/img/p4.jpg"
              meta="Graphic Officer"
              title="Felix Li"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                  distinctio voluptatibus placeat obcaecati necessitatibus, unde
                  iste optio magni minima veniam!"
            >
              <ul class="list-inline social-links">
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-behance" />
                  </a>
                </li>
              </ul>
            </Card>
            <Card
              imgSrc="/assets/img/p3.jpg"
              meta="Algorithm Officer"
              title="Mohsin Braer"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                  distinctio voluptatibus placeat obcaecati necessitatibus, unde
                  iste optio magni minima veniam!"
            >
              <ul class="list-inline social-links">
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-behance" />
                  </a>
                </li>
              </ul>
            </Card>
            <Card
              imgSrc="/assets/img/p2.jpg"
              meta="Cyber Security Officer"
              title="Kevin Nguyen"
              desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                  distinctio voluptatibus placeat obcaecati necessitatibus, unde
                  iste optio magni minima veniam!"
            >
              <ul class="list-inline social-links">
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-facebook" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-twitter" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-dribbble" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="!#">
                    <i class="fa fa-behance" />
                  </a>
                </li>
              </ul>
            </Card>
          </Carusel>
        </div>
      </Container>
      {/* end officers area */}

      {/* start member CTA area */}
      <MemberCTA />
      {/* end member CTA area */}

      {/* start review area */}
      <Review />
      {/* end review area */}
    </React.Fragment>
  )
}

export default About
