import React, { Component } from "react";

class Form extends Component {
  state = {
    fistName: "",
    lastName: "",
    people: []
  };

  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
  };
  handlesubmit = event => {};
  render() {
    return (
      <section>
        <article>
          <form>
            <input
              type="text"
              name="firstName"
              value={this.state.fistName}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            <button type="submit" onSubmit={this.handlesubmit}>
              submit
            </button>
          </form>
        </article>
        <article>
          <h1>People on the list</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
