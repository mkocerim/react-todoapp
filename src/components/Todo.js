import React from "react";

const Todo = (props) => {
  console.log(props);
  const {
    item,
    deleteTodo,
    setTodoText,
    setWillUpdateTodo,
    setIsEdit,
    changeIsDone,
  } = props; //tüm itemleri  props.item yazmak yerine burada const{item,xxx} =props; yazarak yıkıma ugratıyoruz
  return (
    <div
      className={`alert alert-${
        props.item.isDone === true ? "success" : "danger"
      } d-flex justify-content-between align-items-center`}
      role="alert"
    >
      <p>{props.item.text}</p>

      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTodo(item.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-secondary mx-2"
          onClick={() => {
            setIsEdit(true);
            setWillUpdateTodo(props.item.id);
            setTodoText(item.text);
          }}
        >
          Edit
        </button>

        <button
          className="btn btn-secondary btn-sm"
          onClick={() => changeIsDone(item.id)}
        >
          {props.item.isDone === false ? "Done" : "Undone"}
        </button>
      </div>
    </div>
  );
};
export default Todo;
