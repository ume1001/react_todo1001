import React from 'react';
import Add from './Add';
import List from './List';
import './App.css'
 
 
class App extends React.Component {
 
  constructor() {
    super();
    this.state = {
      todolist: [],
    }
  }
 
  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const todolist = this.state.todolist.slice();
    const content = e.target.content.value;
 
    todolist.push({
      title: title,
      content: content,
      done: false,
    });
    this.setState({ todolist });
 
    e.target.title.value = '';
    e.target.content.value = '';
  }
 
  setTodoStatus(clickTodo) {
    const todolist = this.state.todolist.slice();
    const todo = todolist[clickTodo.index];
    todo.done = !todo.done;
    todolist[clickTodo] = todo;
 
    this.setState({ todolist });
  }
 
  deleteTodoState(clickTodo) {
    const todolist = this.state.todolist.slice();
    todolist.splice(clickTodo.index, 1);
    this.setState({ todolist });
  }
 
  render() {
    let undoneNum = 0;
 
    this.state.todolist.forEach((todo) => {
      if (todo.done === false) {
        undoneNum++;
      }
    });
 
    return (
       
<div className="app" class="app-area">
        <Add onSubmit={this.handleSubmit.bind(this)} />
        <List todolist={this.state.todolist} setTodoStatus={this.setTodoStatus.bind(this)} deleteTodoState={this.deleteTodoState.bind(this)} />
      </div>
 
    );
  }
}
 
export default App;