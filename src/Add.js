import React, { Component } from 'react';
import './App.css'
 
class Add extends Component {
 
  render() {
    return (
       
      <div className="form">
              
        <form name="todo-form" onSubmit={this.props.onSubmit}>

          <div class="input-area">
                          <label for="title">件名</label>
                          <div>
                          <input id="title" type="text" class="title-text"/>
                          </div>

                          <label for="title">内容</label>
                          <div>
                          <textarea name="content" class="content-text" rows="4" ></textarea>
                          </div>
          </div>
          <div class="button-area">
                          <button type="submit" class="form-button">作成</button>
                          <button type="reset" class="form-button">キャンセル</button>
          </div>
        </form>
      </div>
    );
  }
};
 
export default Add;