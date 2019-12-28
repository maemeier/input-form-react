import React from "react";

class TodoList extends React.Component {
  render() {
    const { items, handleClearList, handeDeletem, handleEdit } = this.props;
    return (
      <div>
        <ul className="list-group-my-5">
          {" "}
          <h3 className="text-capitalzie text-center">Todo List</h3>
        </ul>
      </div>
    );
  }
}

export default TodoList;
