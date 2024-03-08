import { createContext, ReactElement, useState } from "react";
import { ITodo } from "../interfaces";
import { v4 as uuidv4 } from "uuid";
interface IContext {
  deleteTodo: (todoId: string) => void;
  todoList: ITodo[];
  createTodo: (newTodo: ITodo) => void;
}

interface ITodoContextProviderProps {
  children: ReactElement;
}

export const TodoContext = createContext({} as IContext);

export function TodoContextProvider({
  children,
}: ITodoContextProviderProps): ReactElement {
  const [todoList, setTodoList] = useState<ITodo[]>([
    { id: uuidv4(), title: "test", desc: "make todolist", author: "test" },
    { id: uuidv4(), title: "test", desc: "improve todolist", author: "test" },
    { id: uuidv4(), title: "test", desc: "perfect todolist", author: "test" },
  ]);

  const createTodo = (newTodo: ITodo) => {
    const updatedTodolist = [newTodo, ...todoList];
    setTodoList(updatedTodolist);
  };

  const deleteTodo = (todoId: string): void => {
    const updatedArray = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(updatedArray);
  };

  const values: IContext = {
    createTodo,
    deleteTodo,
    todoList,
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
