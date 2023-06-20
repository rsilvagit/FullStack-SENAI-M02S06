function Task ({task}) {
  return <li className="list-group-item d-flex justify-content-between align-items-center">{task}
  <button type='button' className="btn btn-primary btn-sm">Pendente</button>
  </li>
}
export default Task;