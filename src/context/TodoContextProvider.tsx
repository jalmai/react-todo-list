import { createContext, ReactElement, useState } from "react";

interface IContext {
  todoList: ITodo[];
}
interface ITodo {
  id: string;
  content: string;
}
interface ITodoContextProviderProps {
  children: ReactElement;
}

export const TodoContext = createContext({} as IContext);

export function TodoContextProvider({
  children,
}: ITodoContextProviderProps): ReactElement {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: "1", content: "make todolist" },
    { id: "2", content: "improve todolist" },
    { id: "3", content: "perfect todolist" },
  ]);

  const values: IContext = {
    todoList,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
