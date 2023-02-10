import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import TodoCard from "./TodoCard";

function TodoCardItem() {
  const todoCnxt = useContext(TodoContext);
  return (
    <div className="container m-5">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => todoCnxt.addTodo("hello")}
      >
        Add Todo
      </button>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {todoCnxt.todos.map((element, index) => (
          <TodoCard
            key={index}
            title={element.todoTitle}
            isCompleted={element.isCompleted}
          />
        ))}
      </div>
      ;
    </div>
  );
}

export default TodoCardItem;
