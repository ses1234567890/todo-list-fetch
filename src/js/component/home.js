import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async() => {
    const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/mattiamattia");
    const data = await response.json();
    setTodoList(data);
  };

  const addTodos = async() => {
    const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/mattiamattia",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoList)
    })
  };

  const delTodos = async() => {
    const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/mattiamattia",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoList)
    })
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Add ToDo"
              onKeyUp={(e) => {
                if (e.key == "Enter" && e.target.value.trim() != "") {
                  const newTodo = {label: e.target.value, done: false};
                  setTodoList([...todoList, newTodo]);
                  e.target.value = "";
                  addTodos();
                }
              }}
            />
            {todoList.map((todo, index) => {
              return (
                <div key={index} className="row alert border">
                  <p className="col-8">{todo.label}</p>
                  <p className="offset-2 col-2" onClick={() => {
                    setTodoList(todoList.filter((e, i) => i != index));
                    delTodos();
                  }}>X</p>
                </div>
              );
            })}
            <div className="row p-3 border">{todoList.length > 0 ? `${todoList.length} todos` : "No hay tareas"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
