import { ToDos } from "../assets/items.json";

export function ToDoItems(): JSX.Element {
  return (
    <>
      <section className="toDoItems">
        {ToDos.map(function (toDo) {
          return (
            <article className="toDoCard" key={toDo.index}>
              <h2>
                {" "}
                <span className="material-symbols-outlined">check</span>
                {toDo.title}
              </h2>
              <p>Written by: {toDo.author}</p>
              <p>{toDo.desc}</p>

              <span className="material-symbols-outlined">inventory_2</span>
              <span className="material-symbols-outlined">arrow_downward</span>
              <span className="material-symbols-outlined">arrow_upward</span>
            </article>
          );
        })}
      </section>
    </>
  );
}
