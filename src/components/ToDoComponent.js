import React, { Component } from 'react';
import TodoItem from './ToDoItem';

export default class ToDoComponent extends Component{
  constructor(){
    super();
    this.state={
      todos:[]
    }
    this.inputText = React.createRef(); 
  }
  
  todoForm(){
    return(
      <div>
        <h4>Todo App</h4>
        <input ref={this.inputText} 
          onKeyPress={this.addTodoFromEnterPress.bind(this)} 
        />
        <button onClick={this.addTodoList.bind(this)}>Add</button>
      </div>
    )
  }

  todoList(){
    let todos = this.state.todos;
    return(
      <ol id="todo-list">
        {todos.map((todo,index)=>(
          <TodoItem
            todo={todo}
            mouseClick={this.removeTodoList.bind(this,index)}/>
        ))}
      </ol>
    )
  }

  addTodoList(){
    let todos = this.state.todos;
    let inputTextValue = this.inputText.current.value;
    var newTodos = todos.concat(inputTextValue);
    this.setState({
      todos:newTodos
    })
    this.inputText.current.value = "";
  }

  addTodoFromEnterPress(evt) {
    let keyCode = evt.which || evt.keyCode;
    if (keyCode === 13) { // Detect Enter Key
      this.addTodoList()
    }
  }
  removeTodoList(i){
    let todos = this.state.todos;
    if(i!==-1){
      todos.splice(i,1)
      this.setState({
        todos:todos
      })
    }
  }


  render(){
    return(
      <div>
        {this.todoForm()}
        {this.todoList()}
      </div>
    )
  }
}