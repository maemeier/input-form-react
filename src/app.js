import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./todoInput";

import TodoList from "./todoList";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "water plants" },
      { id: 3, title: "make breakfast" }
    ],
    id: uuid()
  };
  render() {
    console.log(this.state);
    return (
      <div>
        App Component
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;
