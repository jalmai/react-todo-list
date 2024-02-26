import { ToDos } from "../assets/items.json";

export function ToDoItems(): JSX.Element {
  return (
    <>
      <section className="toDoItems">
        {ToDos.map(function (toDo) {
          return (
            <article className="toDoCard" key={toDo.index}>
              <h2>{toDo.title}</h2>
              <p>Written by: {toDo.author}</p>
              <p>{toDo.desc}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}
