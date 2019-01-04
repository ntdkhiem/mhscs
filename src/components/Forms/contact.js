import React, { Component } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class ContactForm extends Component {
  state = {
    form: {},
    isSubmited: false,
  }

  onInputChange = event => {
    const fields = this.state.form
    const newFields = {}
    newFields[event.target.name] = event.target.value

    this.setState({
      form: { ...fields, ...newFields },
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
    this.setState({ isSubmited: true })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mt-10">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="single-input"
            value={this.state.form.name || ""} // value is undefined after render
            onChange={this.onInputChange}
          />
        </div>
        <div className="mt-10">
          <input
            type="email"
            name="email"
            placeholder="email"
            className="single-input"
            value={this.state.form.email || ""}
            onChange={this.onInputChange}
          />
        </div>
        <div className="mt-10">
          <textarea
            name="message"
            placeholder="Message"
            className="single-textarea"
            value={this.state.form.message || ""}
            onChange={this.onInputChange}
          />
        </div>
        <button type="submit" className="genric-btn primary mt-10 btn-block">
          Submit
        </button>
      </form>
    )
  }
}
