import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./todoInput";

import TodoList from "./todoList";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "Steal Robert's ballet shoes" },
      { id: 2, title: "Kidnap Jeff's dog" },
      { id: 3, title: "Hack Edgard's github with HTML" }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    //collect id and items
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updateItems = [...this.state.item, newItem];
    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  handleClearList = () => {
    console.log("clear");
  };

  handleEdit = id => {
    console.log(`handleEdit ${id}`);
  };
  handleDelete = id => {
    console.log(`handleDelete ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalzie text-center">Add your list</h3>
          </div>
        </div>
        <TodoInput
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
        />
        <TodoList
          items={this.state.items}
          handleClearList={this.handleClearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
