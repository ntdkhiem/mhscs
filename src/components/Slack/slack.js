import React from "react"

/**
 * @render react
 * @name Slack
 * @description CTA button for `slack` sign up link.
 * @example
 * <Slack />
 */
const Slack = () => {
  return (
    <section className="cta-two-area">
      <div className="container text-center">
        <a href="https://mhscomputerclub.slack.com/">
          <img
            className="img-fluid"
            src="/assets/img/slack.png"
            alt="Slack cta button"
          />
        </a>
      </div>
    </section>
  )
}

export default Slack
