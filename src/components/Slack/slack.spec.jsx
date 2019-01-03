import React from "react"
import { shallow, configure } from "enzyme"
import Slack from "./slack"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("SlackCTA", () => {
  it("renders without crash", () => {
    shallow(<Slack />)
  })
})

// Based on https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22
