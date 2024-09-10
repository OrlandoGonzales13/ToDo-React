import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  { text: "Hacer la tarea de programación", completed: true },
  { text: "Leer un capítulo del libro de algoritmos", completed: false },
  { text: "Revisar correos electrónicos", completed: true },
  { text: "Practicar ejercicios de JavaScript", completed: false },
  { text: "Practicar ejercicios de Python", completed: true },
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = defaultTodos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  )

  console.log(`Los usuarios buscar ToDos de ${searchValue}`);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}></TodoCounter >
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></TodoSearch>

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}>
          </TodoItem>
        ))}
      </TodoList>

      <CreateTodoButton></CreateTodoButton>
    </>
  );
}

export default App;
