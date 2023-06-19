import React from "react";
import Task from "./Task";

function ToDo ({ tasks }) {
    return (
      <div>
        <ul className="list-group mt-3">
          {tasks.map(task => (
            <Task key={task} task={task} />
          ))}
        </ul>
      </div>
    )
  }
export default ToDo
