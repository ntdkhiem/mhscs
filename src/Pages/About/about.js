import React, { PureComponent } from "react"
import { Helmet } from "react-helmet"

import Banner from "../../components/banner"
import Goal from "../../components/goal"
import Container from "../../components/container"
import Carousel from "../../components/carousel"
import Card from "../../components/card"
import MemberCTA from "../../components/memberCTA"
import Review from "../../components/review"

import { getOfficers } from "../../containers/google"

class About extends PureComponent {
  render() {
    const { officers, isLoading, error } = this.props
    let officersContent
    if (error) {
      officersContent = (
        <div className="text-danger">
          Error: please contact us!! ({error.message})
        </div>
      )
    } else if (isLoading) {
      officersContent = <div>Loading..</div>
    } else {
      officersContent = (
        <React.Fragment>
          <div className="row pt-5">
            <Carousel>
              {officers.map(officer => (
                <Card
                  key={officer.timestamp}
                  imgSrc={officer.avatar}
                  meta={officer.role}
                  title={officer.name}
                  desc={officer.about}
                >
                  <ul className="list-inline social-links">
                    {officer.medias.map((media, index) => {
                      const key = Object.keys(media)[0]
                      return (
                        <li key={index} className="list-inline-item">
                          <a href={media[key]}>
                            <i className={"fa fa-" + key} />
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </Card>
              ))}
            </Carousel>
          </div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>About | MHSCS</title>
        </Helmet>
        {/* <!-- start banner Area --> */}
        <Banner page="About Us" link="/home" />
        {/* <!-- End banner Area --> */}
        <div className="p-1" />
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
              imgSrc="/assets/img/officers/paul.jpg"
              meta="Advisor"
              title="Paul Marques"
              desc="Want to meet one of the top Comp Sci teachers in the country? "
            />
          </div>
          {officersContent}
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
}

export default getOfficers(About)
