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
  { text: "Limpiar el escritorio de trabajo", completed: true },
  { text: "Preparar presentación para la reunión del lunes", completed: false },
  { text: "Actualizar el portafolio en línea", completed: false },
  { text: "Salir a correr 5 km", completed: true },
  { text: "Cocinar la cena", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}></TodoCounter>
      <TodoSearch></TodoSearch>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}></TodoItem>
        ))}
      </TodoList>

      <CreateTodoButton></CreateTodoButton>
    </>
  );
}

export default App;
