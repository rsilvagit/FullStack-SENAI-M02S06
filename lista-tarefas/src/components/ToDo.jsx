import Task from "./Task";
export default function ToDo ({ tasks }) {
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

