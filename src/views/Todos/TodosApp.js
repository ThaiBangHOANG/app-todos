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
    editTodo: {},
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

  hanldeDeleteTodos = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("You have just deleted a todo");
  };

  hanldeEditTodos = (todo) => {
    let { editTodo, listTodos } = this.state;

    let isEmptyObject = Object.keys(editTodo).length === 0;

    // save
    if (isEmptyObject === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });

      toast.success("State update");

      return;
    }

    // edit
    this.setState({
      editTodo: todo,
    });
  };

  hanldeOnchangeEditTodos = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;
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
                  {isEmptyObject === true ? (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(event) =>
                              this.hanldeOnchangeEditTodos(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => this.hanldeEditTodos(item)}
                  >
                    {isEmptyObject === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    type="button"
                    onClick={() => this.hanldeDeleteTodos(item)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default TodosApp;
