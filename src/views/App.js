import logo from "./logo.svg";
import "./App.scss";
import TodosApp from "./Todos/TodosApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The Todo App has written by React</p>
      </header>

      <TodosApp />
    </div>
  );
}

export default App;
