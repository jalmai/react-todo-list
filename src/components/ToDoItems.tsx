import { ToDos } from "../assets/items.json";

export function ToDoItems(): JSX.Element {
  return (
    <>
      <section className="toDoList">
        {ToDos.map(function (todo) {
          return (
            <article className="toDoCard" key={todo.index}>
              <h2>
                {" "}
                <span className="material-symbols-outlined">check</span>
                {todo.title}
              </h2>
              <p>Written by: {todo.author}</p>
              <p>{todo.desc}</p>

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
