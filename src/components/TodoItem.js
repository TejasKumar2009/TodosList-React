import React from "react";

const TodoItem = (props) => {
  return (
        <div className="eachItem">
          <h3>{props.value}</h3>
          <div className="todo-btn">
            <i onClick={()=>props.deleteTodo(props.index)} className="fas fa-trash-alt add-btn" title="Delete Item"></i>
          </div>
        </div>
  );
};

export default TodoItem;
