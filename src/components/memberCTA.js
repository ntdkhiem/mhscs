import React from "react"

const MemberCTA = () => {
  return (
    <section className="cta-one-area relative section-gap">
      <div className="container">
        <div className="overlay overlay-bg" />
        <div className="row justify-content-center">
          <div className="wrap">
            <h1 className="text-white">Become a member</h1>
            <p>
              There is a moment in the life of any aspiring astronomer that it
              is time to buy that first telescope. It’s exciting to think about
              setting up your own viewing station whether that is on the deck.
            </p>
            <a
              className="primary-btn wh"
              href="https://goo.gl/forms/RlKUKIS2UjjrRxFT2"
              target="_blank"
              rel="noopener noreferrer"
            >
              ENROLL NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MemberCTA
