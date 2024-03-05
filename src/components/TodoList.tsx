import { useState } from "react";
import { ToDos } from "../assets/items.json";
import { TodoCard } from "./TodoCard";

interface item {
  index: number;
  title: string;
  desc: string;
  author: string;
  completed: boolean;
}
export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>(ToDos);
  const [input, setInput] = useState<string>("");
  const handleClick = () => {
    const newTodo: item = {
      index: todos.length + 1,
      title: input,
      desc: "hej hej",
      author: "fekalia",
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <h1>Todo list</h1>
      <section className="toDoItems">
        {todos.map((todo) => (
          <>
            <TodoCard props={todo} />
          </>
        ))}
      </section>
      <input
        type="text"
        placeholder="add todo"
        onChange={(e) => setInput(e.currentTarget.value)}
      ></input>
      <button onClick={handleClick}>Add</button>
    </>
  );
};
