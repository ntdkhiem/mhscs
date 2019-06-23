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
              Join us and you can learn many new things and develop your skills
              for the future! (Malden High School Only!)
            </p>
            <a
              className="primary-btn wh heartbeat"
              href="https://forms.gle/nKVGwWUJa9ZFVg9Y7"
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
