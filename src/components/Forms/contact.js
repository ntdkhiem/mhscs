import React, { Component } from "react"

export default class ContactForm extends Component {
  state = {
    form: {
      name: {
        value: "",
      },
      email: {
        value: "",
      },
      message: {
        value: "",
      },
    },
    isSubmited: false,
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      form: {
        [name]: value,
      },
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ isSubmited: true })
  }

  render() {
    return (
      <form name="contact" method="POST" onSubmit={this.handleSubmit}>
        <div className="mt-10">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.form.name.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mt-10">
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.form.email.value}
            onChange={this.handleChange}
          />
        </div>
        <div className="mt-10">
          <textarea
            name="message"
            placeholder="Message"
            className="single-textarea"
            value={this.state.form.message.value}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="genric-btn primary mt-10 btn-block">
          Submit
        </button>
      </form>
    )
  }
}
