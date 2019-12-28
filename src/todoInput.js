import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
class TodoInput extends React.Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className="card card=body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <FontAwesomeIcon icon={faBook} />
              </div>
            </div>
            <input
              type="text"
              className="form-control  text-capitalize"
              placeholder="add todo item"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
