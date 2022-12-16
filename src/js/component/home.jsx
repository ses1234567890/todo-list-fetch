import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
  const [todoList, setTodoList] = useState([]);
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
                  setTodoList([...todoList, e.target.value]);
                  e.target.value = "";
                }
              }}
            />
            {todoList.map((todo, index) => {
              return (
                <div key={index} className="row alert border">
                  <p className="col-8">{todo}</p>
                  <p className="offset-2 col-2" onClick={() => {
                    setTodoList(todoList.filter((e, i) => i != index))

                    // let newArray = [];
                    // for(let x = 0; x<todoList.length; x++) {
                    //   if(x != index) {
                    //     newArray.push(todoList[x])
                    //   }
                    // }
                    // setTodoList(newArray);
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
