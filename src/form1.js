import React, { Component } from "react";
// uncontrolled inputs

class Form1 extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const name = this.refs.myName;
    console.log(name);

    const email = this.email.value;
    console.log(email);

    const text = this.refs.myText;
    text.style.color = "green";

    console.log(name, email, text);
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="myName" />
          <input type="email" ref={mail => (this.email = mail)} />
          <button type="submit">submit</button>
        </form>
        <p ref="myText">Hello component</p>
      </section>
    );
  }
}

export default Form1;
