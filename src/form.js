import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    people: []
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value.toUpperCase()
    });
  };
  handlesubmit = event => {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    console.log(firstName, lastName);
    if (firstName.length > 0 && lastName.length > 0) {
      const person = `${firstName} ${lastName}`;
      this.setState({
        people: [...this.state.people, person],
        firstName: "",
        lastName: ""
      });
    }
  };
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handlesubmit}>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h1>People on the list</h1>
          {this.state.people}
        </article>
      </section>
    );
  }
}

export default Form;
