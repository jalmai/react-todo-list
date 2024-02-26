import { ToDos } from "../assets/items.json";

export function ToDoItems(): JSX.Element {
  return (
    <>
      {ToDos.map(function (toDo) {
        return (
          <article className="toDoCard">
            <h2>{toDo.title}</h2>
            <p>{toDo.desc}</p>
            <p>{toDo.author}</p>
          </article>
        );
      })}
    </>
  );
}
