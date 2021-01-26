import React, { Component } from 'react';
import './App.css'
 
class Todo extends Component {
 
  render() {
    const className = this.props.done? 'done' : 'undone';
    const status = this.props.done? '未完了' : '完了';
    const todoDelete = this.props.done? '削除する' : '';
    return(
       
<div className={className} class="">
         
<div class="Todo">
           
<div class="status">
            <a href="" onClick={(e) => { e.preventDefault(); this.props.setTodoStatus(this.props)}}>{status}にする</a>　　
            <a href="" onClick={(e) => { e.preventDefault(); this.props.deleteTodoState(this.props)}}>{todoDelete}</a>
          </div>
 
           
<table>
             
<tr>
               
<th>件名：</th>
 
               
<td>{this.props.title}</td>
 
            </tr>
 
             
<tr>
               
<th>内容：</th>
 
               
<td>{this.props.content}</td>
 
            </tr>
 
          </table>
 
        </div>
 
      </div>
 
    );
  }
 
};
export default Todo;