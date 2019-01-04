import React, { Component } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

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

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    event.preventDefault()
    this.setState({ isSubmited: true })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
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
