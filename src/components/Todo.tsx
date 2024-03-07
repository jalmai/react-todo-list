import { ReactElement } from "react";
import { ITodo } from "../interfaces";

interface ITodoProps {
  todo: ITodo;
}
export function Todo({ todo }: ITodoProps): ReactElement {
  return <article id={todo.id}> {todo.content}</article>;
}
