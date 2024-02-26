import { NewItem } from "./components/NewItem.tsx";
import { ToDoItems } from "./components/ToDoItems.tsx";
export function App() {
  return (
    <>
      <h1>To Do List</h1>
      <NewItem />
      <ToDoItems />
    </>
  );
}
