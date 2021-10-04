import React from "react";
import "./TodosApp.scss";
import AddTodos from "./AddTodos";
import { toast } from "react-toastify";

class TodosApp extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Coding React", time: "8 am" },
      { id: "todo2", title: "React App", time: "10 am" },
      { id: "todo3", title: "Interview React", time: "13 pm" },
    ],
  };

  addTodos = (todo) => {
    // let currentListTodos = this.state.listTodos;
    // currentListTodos.push(todo);

    this.setState({
      listTodos: [...this.state.listTodos, todo],
      // listTodos: currentListTodos;
    });

    toast.success("Congratulations!!! You have just added a todo.");
  };

  render() {
    let { listTodos } = this.state;

    // let listTodos = this.state.listTodos;

    return (
      <div className="todos-container">
        <AddTodos addTodos={this.addTodos} />
        <div className="list-todo-content">
          <div className="first-child-todo">List Todos</div>
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}{" "}
                  </span>
                  <button type="button">Edit</button>
                  <button type="button">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default TodosApp;
