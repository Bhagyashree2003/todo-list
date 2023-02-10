import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

function TodoCard({ title }) {
  const todoCnxt = useContext(TodoContext);
  const [isCompleted, setIsCompleted] = useState(false);
  const clicked = () => {
    setIsCompleted((state) => (state = true));
  };
  return (
    <>
      <div
        className="container m-5"
        style={{
          width: "18rem",
        }}
      >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onClick={clicked}
                value={isCompleted}
                onChange={(e) => setIsCompleted(e.target.value)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                {isCompleted ? "completed" : "pending"}
              </label>
            </div>
            {isCompleted && (
              <button
                type="submit"
                onClick={() => todoCnxt.deleteTodo(title)}
                className="btn btn-primary"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoCard;
