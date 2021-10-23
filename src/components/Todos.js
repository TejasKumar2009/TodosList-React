import React, { useState, useEffect } from "react";
import todosLogo from "../images/todos_logo.svg";
import TodoItem from "./TodoItem";

const getLocalTodos = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

const Todos = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todosList, setTodosList] = useState(getLocalTodos());
  const [showAlert, setShowAlert] = useState({
    title: "",
    value: false,
    color: "",
  });

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const addTodo = () => {
    if (todoInput) {
      setTodosList([...todosList, todoInput]);
      setTodoInput("");
      setShowAlert({ value: false });
    } else {
      setShowAlert({
        title: "Oops! Please, Enter Something!!",
        value: true,
        color: "red",
      });
    }
  };

  const deleteTodo = (id) => {
    const updateItems = todosList.filter((value, index) => {
      return id !== index;
    });
    setTodosList(updateItems);
  };

  const deleteAllTodos = () => setTodosList([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosList));
  }, [todosList]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todosLogo} alt="Todos Logo Here" />
            <figcaption>Add Your Todos Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addTodo();
              }}
            >
              <input
                value={todoInput}
                onChange={onChangeInput}
                type="text"
                placeholder="✍ Add Items..."
              />
              <i
                onClick={addTodo}
                className="fa fa-plus add-btn"
                title="Add Item"
              ></i>
            </form>
          </div>

          {showAlert ? (
            <h2 style={{ color: showAlert.color, marginTop: "12px" }}>
              {showAlert.title}
            </h2>
          ) : null}
          <div className="showItems">
            {todosList.length === 0 ? (
              <h1 style={{color: "white"}}>No Todos To Display!</h1>
            ) : (
              <>
                {todosList.map((value, index) => (
                  <TodoItem
                    key={index}
                    index={index}
                    value={value}
                    deleteTodo={deleteTodo}
                  />
                ))}
              </>
            )}
            <div className="showItems">
              <button
              disabled={todosList.length===0}
                onClick={deleteAllTodos}
                className="btn effect04"
                data-sm-link-text="Remove All"
              >
                <span> CHECK LIST </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
