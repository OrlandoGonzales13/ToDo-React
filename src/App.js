import logo from "./platzi.webp";
import "./App.css";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

function App() {
  return (
    <div className="App">
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>

      <TodoList>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </TodoList>

      <CreateTodoButton></CreateTodoButton>

    </div>
  );
}



function TodoItem() {
  return (
    <>
      <li>
        <span>V</span>
        <p>Todo Item #1</p>
        <span>X</span>
      </li>
    </>
  );
}

export default App;
