import { createContext, useState } from "react";

export const TodoContext = createContext({
  addTodo: () => {},
  deleteTodo: () => {},
  todos: [
    {
      todoTitle: null,
      isCompleted: false,
    },
  ],
});

function TodoContextProvider({ children }) {
  const [todo, setTodo] = useState([]);
  const addTodo = (title) => {
    setTodo([...todo, { todoTitle: title, isCompleted: false }]);
  };
  const deleteTodo = (title) => {
    const newtodo = todo.filter((state) => state.todoTitle !== title);
    setTodo(newtodo);
  };
  const value = {
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    todos: todo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;
