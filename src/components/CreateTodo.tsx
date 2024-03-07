import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import { ITodo } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export function CreateTodo(): ReactElement {
  const [value, setValue] = useState("");
  const { createTodo } = useContext(TodoContext);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      content: value,
    };
    createTodo(newTodo);
    setValue("");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="todo">Todo</label>
      <input
        id="todo"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
      ></input>
      <button type="submit">Create</button>
    </form>
  );
}
