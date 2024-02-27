import { useState } from "react";

export function NewItem({ addTodo }: any): JSX.Element {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    author: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };
  const handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    addTodo(form);
  };
  return (
    <>
      <form className="newItem" onSubmit={handleNewTodo}>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="To do"
        ></input>
        <input
          type="text"
          onChange={handleChange}
          name="desc"
          placeholder="Tell me more"
        ></input>
        <input
          type="text"
          onChange={handleChange}
          name="author"
          placeholder="Author"
        ></input>
        <button type="submit" name="submit">
          Add new Todo
        </button>
      </form>
    </>
  );
}
