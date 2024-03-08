import { FormEventHandler, ReactElement, useContext, useState } from "react";
import { TodoContext } from "../context/TodoContextProvider";
import { ITodo } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export function CreateTodo(): ReactElement {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    author: "",
  });

  const { createTodo } = useContext(TodoContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      title: form.title,
      desc: form.desc,
      author: form.author,
    };
    createTodo(newTodo);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="todo">Todo</label>
      <input
        id="todoTitle"
        name="title"
        onChange={handleChange}
        type="text"
      ></input>
      <input
        id="todoDesc"
        name="desc"
        onChange={handleChange}
        type="text"
      ></input>
      <input
        id="todoAuthor"
        name="author"
        onChange={handleChange}
        type="text"
      ></input>
      <button type="submit">Create</button>
    </form>
  );
}
