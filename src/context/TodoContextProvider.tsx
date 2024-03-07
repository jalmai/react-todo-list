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
    { id: uuidv4(), content: "make todolist" },
    { id: uuidv4(), content: "improve todolist" },
    { id: uuidv4(), content: "perfect todolist" },
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
