import { NewItem } from "./components/NewItem.tsx";
import { ToDoItems } from "./components/ToDoItems.tsx";
import { useState } from "react";
export function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo: any) => {
    setTodos([
      ...todos,
      {
        index: todos.length + 1,
        desc: todo.desc,
        completed: false,
        isEditing: false,
      },
    ]);
  };
  return (
    <>
      <h1>To Do List</h1>
      <NewItem addTodo={addTodo} />
      <ToDoItems />
    </>
  );
}
