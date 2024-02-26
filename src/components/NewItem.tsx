import { useState } from "react";

export function NewItem() {
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
  return (
    <>
      <form className="newItem">
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
        <input type="submit" name="submit"></input>
      </form>
    </>
  );
}
