import { useState } from "react";
interface item {
  id: number;
  text: string;
  completed: boolean;
}
export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    {
      id: 1,
      text: "hej hej hej",
      completed: false,
    },
    {
      id: 2,
      text: "hej hej hej",
      completed: false,
    },
    {
      id: 3,
      text: "hej hej hej",
      completed: false,
    },
    {
      id: 4,
      text: "hej hej hej",
      completed: false,
    },
  ]);
  const [input, setInput] = useState<string>("");
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleClick = () => {
    const newTodo: item = {
      id: 23,
      text: input,
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
                key={todo.id}
                onClick={() => handleToggle(todo.id)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
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
