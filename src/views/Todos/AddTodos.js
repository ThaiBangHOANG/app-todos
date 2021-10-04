import React from "react";
import { toast } from "react-toastify";

class AddTodos extends React.Component {
  state = {
    title: "",
  };

  handleOnchangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  hanldClickTodos = () => {
    if (!this.state.title) {
      toast.error("Please fill the todo in the input!");
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    };
    this.props.addTodos(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnchangeTitle(event)}
        />
        <button type="button" onClick={() => this.hanldClickTodos()}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodos;
