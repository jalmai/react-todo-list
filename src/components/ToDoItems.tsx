import { ToDos } from "../assets/items.json";

export function ToDoItems(): JSX.Element {
  return (
    <>
      {ToDos.map(function (toDo) {
        return (
          <article className="toDoCard" key={toDo.index}>
            <h2>{toDo.title}</h2>
            <p>{toDo.desc}</p>
            <p>Written by: {toDo.author}</p>
          </article>
        );
      })}
    </>
  );
}
