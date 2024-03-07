import { CreateTodo } from "./components/CreateTodo.tsx";
import { TodoList } from "./components/TodoList.tsx";

export function App() {
  return (
    <>
      <CreateTodo />
      <TodoList />
    </>
  );
}
