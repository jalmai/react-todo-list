import { useState } from "react";
import { ToDos } from "../assets/items.json";
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
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.index === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
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
      <main>
        <h1>Todo list</h1>
        <section className="todoList">
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.index}
                onClick={() => handleToggle(todo.index)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="add todo"
            onChange={(e) => setInput(e.currentTarget.value)}
          ></input>
          <button onClick={handleClick}>Add</button>
        </section>
      </main>
    </>
  );
};
