import React from "react"
import ReactDOM from "react-dom"
import { configure, shallow } from "enzyme"
import Slack from "./components/Slack"
import Footer from "./components/Footer"
import App from "./App"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it("renders SlackCTA", () => {
  const wrapper = shallow(<App />)
  const slackCTA = <Slack />
  expect(wrapper.contains(slackCTA)).toEqual(true)
})

it("renders Footer", () => {
  const wrapper = shallow(<App />)
  const footer = <Footer />
  expect(wrapper.contains(footer)).toEqual(true)
})

// Based on https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22
// https://jestjs.io/docs/en/expect.html
