import React, { Component }from 'react';

import { toDoItems } from './components/data';

import ToDoList from './components/TodoComponents/ToDoList';
import ToDoForm from './components/TodoComponents/ToDoForm';
import ToDo from './components/TodoComponents/ToDo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() { // this will run on componentDidMount
    // this = {}
    super();
    this.state = { //you can only have one state (this.state) but multiple state objects
      toDoItems: toDoItems
    };
    // return this;
  }

  toggleItem = itemId => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };

    console.log(newItem)
    this.setState({
      toDoItems: [...this.state.toDoItems, newItem]
    });
  };

  render() {
    console.log(this.state.toDoItems)
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <ToDoForm addItem={this.addItem} />
        </div>
        <ToDoList
          toDoItems={this.state.toDoItems}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}


export default App;




