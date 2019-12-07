// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

import React from "react";

import ToDo from "./ToDo";

const ToDoList = props => {
  // console.log(props.toDoItems)
  return (
    <div className="toDo-list">
      {props.toDoItems.map(item => {
        return <ToDo item={item} key={item.id} toggleItem={props.toggleItem} />;
      })}
    </div>
  );
};

export default ToDoList;
