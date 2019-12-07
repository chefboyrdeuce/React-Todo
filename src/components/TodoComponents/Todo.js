// `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react";

const ToDo = props => {
  console.log(props.item)
  return (
    <div
      className={`item${props.item.completed ? "completed" : ""}`}
      onClick={e => props.toggleItem(props.item.id)}
    >
      {props.item.task}
    </div>
  );
};

export default ToDo;
