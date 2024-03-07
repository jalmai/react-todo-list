import { createContext, ReactElement, useState } from "react";
import { ITodo } from "../interfaces";
interface IContext {
  deleteTodo: (todoId: string) => void;
  todoList: ITodo[];
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

  const deleteTodo = (todoId: string): void => {
    const updatedArray = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(updatedArray);
  };

  const values: IContext = {
    deleteTodo,
    todoList,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
