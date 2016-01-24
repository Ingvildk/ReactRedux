import React, { Component } from 'react';
import store from '../store/counterStore';
import * as actionCreators from '../actions/actionCounter';
import * as actionTodo from '../actions/actionTodo';

export default class App extends Component {

  componentWillMount() {
        this.updateState();
  }

  componentDidMount() {
    store.subscribe(this.updateState.bind(this));
  }

  updateState() {
      this.setState(
        {value: store.getState() }
        );
  }


render () {
console.log("render is running");
// this state 
var todos = this.state.value.todo;
var TodoList = todos;
console.log("TodoList");
console.log(TodoList);
var callRender = () => {
  	//this is the increment function
    const increment = actionCreators.increment();
    const decrement = actionCreators.decrement();
    return (
      <div>
        <button onClick = { () => 
          store.dispatch(increment)} >
          Space is the place
        </button> 
        <button onClick = { () => 
            store.dispatch(decrement)} >
          I LOVE CALIFORNIA
        </button>
        <br/>
        <br/>
        <input type="text" ref={node => {
            this.input = node;
          }} />
        <button onClick = { () => {
            store.dispatch(actionTodo.addtodo(this.input.value));
            this.input.value = '';
          }} >
            Add todo
        </button>
        <ul>
          {TodoList.map( (todo) => {
            return (
              <div>
              <li key= {todo.id} 
                onClick = { () => {
                  store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: todo.id
                  });
                }}
                style = {{
                  textDecoration: 
                    todo.completed ? 
                      'line-through' :
                      'none'
                }} > 
              {todo.text}</li>
              <button onClick={ () => {
                  store.dispatch(actionTodo.deleteTodo(todo.id));
              }}> x </button>
              </div>  
              );
          }) 
        }
        </ul>
        <br/>
        <br/>
      </div>  
    );
  }
  return  (
    <div>
      {callRender() }
      
    </div>
    );
}
}

