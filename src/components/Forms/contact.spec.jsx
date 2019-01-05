import React from "react"
import { mount, configure } from "enzyme"
import ContactForm from "./contact"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

describe("<ContactForm />", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<ContactForm />)
  })

  it("`<ContactForm >` component renders without crash", () => {
    expect(wrapper).toExist()
  })

  it("should have a `<form>` element", () => {
    expect(wrapper.find("form").length).toBe(1)
  })

  describe("<form /> (not <Form /> component)", () => {
    it("`<form>` contains 2 inputs, 1 textarea", () => {
      const inputs = wrapper.find("input")
      const textarea = wrapper.find("textarea")
      expect(inputs.length).toBe(3)
      expect(textarea.length).toBe(1)
    })
    it('renders a `name` input with the placeholder of "name" ', () => {
      const name = wrapper.find("#name")
      expect(name.length).toBe(1)
      expect(name.props().placeholder).toBe("name")
    })
    it('renders a `email` input with the placeholder of "email"', () => {
      const email = wrapper.find("#email")
      expect(email.length).toBe(1)
      expect(email.props().placeholder).toBe("email")
    })
    it('renders a `message` input with the placeholder of "message"', () => {
      const message = wrapper.find("#message")
      expect(message.length).toBe(1)
      expect(message.props().placeholder).toBe("message")
    })
    it("All element's value should be empty", () => {
      const name = wrapper.find("#name")
      const email = wrapper.find("#email")
      const message = wrapper.find("#message")
      expect(name.props().value).toBe("")
      expect(email.props().value).toBe("")
      expect(message.props().value).toBe("")
    })
    it("stimulates form submission with no values", () => {
      wrapper.find("form").simulate("submit", { preventDefault() {} })
      expect(wrapper.state().isSubmited).toEqual(true)
      expect(wrapper.find("form")).not.toExist()
      expect(wrapper.find("p").length).toBe(1)
      expect(wrapper.find("p").text()).toBe("Thanks For Your Submission")
    })
  })
})
