// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.

import React from "react";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemText: "",
      task: "something"
    };
  }

  changeHandler = event => {
    this.setState({ itemText: event.target.value });
    console.log('test');

  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addItem(this.state.itemText);
    this.setState({ itemText: "" });    

  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          task="itemText"
          value={this.state.itemText}
          onChange={this.changeHandler}
        />
        <button type="submit">Add Todo</button>
        <button type="submit">Clear Completed</button>
      </form>
    );
  }
}

export default ToDoForm;
