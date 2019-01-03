import React from "react"
import { shallow, configure } from "enzyme"
import Feature from "./feature"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Feature", () => {
  it("renders without crash", () => {
    shallow(<Feature />)
  })
})
