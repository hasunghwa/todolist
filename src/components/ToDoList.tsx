import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import Select from "./Select"

function ToDoList(){
  const toDos = useRecoilValue(toDoSelector);
  
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <Select/>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;