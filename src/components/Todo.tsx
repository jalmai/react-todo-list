import { ReactElement, useContext } from "react";
import { ITodo } from "../interfaces";
import { TodoContext } from "../context/TodoContextProvider";

interface ITodoProps {
  todo: ITodo;
}
export function Todo({ todo }: ITodoProps): ReactElement {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <article id={todo.id} className="todoCard">
      <h2>
        {" "}
        <span className="material-symbols-outlined">check</span>
        {todo.title}
      </h2>
      <p>Written by: {todo.author}</p>
      <span>{todo.desc}</span>
      <span className="material-symbols-outlined">inventory_2</span>
      <span className="material-symbols-outlined">arrow_downward</span>
      <span className="material-symbols-outlined">arrow_upward</span>
      <span
        className="material-symbols-outlined"
        onClick={() => deleteTodo(todo.id)}
      >
        delete
      </span>
    </article>
  );
}
