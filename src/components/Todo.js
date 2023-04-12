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
    isEdit,
  } = props; //tüm itemleri  props.item yazmak yerine burada const{item,xxx} =props; yazarak yıkıma ugratıyoruz
  return (
    <div
      className={`alert alert-${
        props.item.isDone ? "success" : "danger"
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
          className={`btn btn-sm btn-${
            isEdit === true ? "danger" : "success"
          } mx-2`}
          onClick={() => {
            setIsEdit(true);
            setWillUpdateTodo(item.id);
            setTodoText(item.text);
          }}
        >
          Edit
        </button>

        <button
          className={`btn btn-${props.item.isDone ? "info" : "warning"} btn-sm`}
          onClick={() => {
            changeIsDone(item.id);
            setIsEdit(false);
          }}
        >
          {props.item.isDone ? "Done" : "Undone"}
        </button>
      </div>
    </div>
  );
};
export default Todo;
