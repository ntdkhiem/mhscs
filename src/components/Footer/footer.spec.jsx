import React from "react"
import { mount, shallow, configure } from "enzyme"
import Footer from "./footer"
import ContactForm from "../Forms/contact"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("Footer", () => {
  let mountedFooter
  const mountFooter = () => {
    if (!mountedFooter) {
      mountedFooter = mount(<Footer />)
    }
  }
  it("renders without crash", () => {
    shallow(<Footer />)
  })
  it("renders ContactForm properly", () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toContainReact(<ContactForm />)
  })
})
