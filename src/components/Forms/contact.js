import React, { Component, PureComponent } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form extends Component {
  state = {
    form: {},
  }

  // every change in input will change the state of it or create a new item with the input's name
  onInputChange = event => {
    const fields = this.state.form
    const newFields = {}
    newFields[event.target.name] = event.target.value

    this.setState({
      form: { ...fields, ...newFields },
    })
  }

  // submit this to netlify's handler and reset fields
  handleSubmit = event => {
    event.preventDefault()
    const form = this.state.form
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    this.setState({ form: {} })

    this.props.Submitted()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className="mt-10">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="name"
            className="single-input"
            value={this.state.form.name || ""}
            onChange={this.onInputChange}
            require="true"
          />
        </div>
        <div className="mt-10">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email"
            className="single-input"
            value={this.state.form.email || ""}
            onChange={this.onInputChange}
            require="true"
          />
        </div>
        <div className="mt-10">
          <textarea
            id="message"
            name="message"
            placeholder="message"
            className="single-textarea"
            value={this.state.form.message || ""}
            onChange={this.onInputChange}
            require="true"
          />
        </div>
        <button type="submit" className="genric-btn primary mt-10 btn-block">
          Send
        </button>
      </form>
    )
  }
}

export default class ContactForm extends PureComponent {
  state = {
    isSubmited: false,
  }

  Submitted = () => {
    this.setState({ isSubmited: true })
  }

  render() {
    const { isSubmited } = this.state
    return (
      <React.Fragment>
        {isSubmited ? (
          <p className="text-center">Thanks For Your Submission</p>
        ) : (
          <Form Submitted={this.Submitted} />
        )}
      </React.Fragment>
    )
  }
}
