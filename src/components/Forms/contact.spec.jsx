import React from "react"
import { mount, shallow, configure } from "enzyme"
import ContactForm from "./contact"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("ContactForm", () => {
  let mountedContactForm
  const mountContact = () => {
    if (!mountedContactForm) {
      mountedContactForm = mount(<ContactForm />)
    }
    return mountedContactForm
  }
  it("renders without crash", () => {
    shallow(<ContactForm />)
  })
  it("contains 2 inputs and 1 textarea", () => {
    const wrapper = mountContact()
    const inputs = wrapper.find("input")
    const textarea = wrapper.find("textarea")
    expect(inputs).toHaveLength(2)
    expect(textarea).toHaveLength(1)
  })
  it("stimulates form submission with no values", () => {
    const wrapper = mountContact()
    wrapper.find("form").simulate("submit", { preventDefault() {} })
    expect(wrapper.state().isSubmited).toEqual(true)
  })
})
