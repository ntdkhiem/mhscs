import React from "react"
import { shallow, configure } from "enzyme"
import Footer from "./footer"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Footer", () => {
  it("renders without crash", () => {
    shallow(<Footer />)
  })
})
