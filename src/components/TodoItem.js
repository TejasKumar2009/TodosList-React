import React from "react";

const TodoItem = (props) => {
  return (
        <div className="eachItem">
          <h3>{props.value.todo}</h3>
          <div className="todo-btn">
            <i onClick={()=>props.deleteTodo(props.index)} className="fas fa-trash-alt add-btn" title="Delete Item"></i>
            <i onClick={()=>props.editTodo(props.index)} class="fas fa-edit add-btn"title="Edit Todo"></i>
          </div>
        </div>
  );
};

export default TodoItem;
