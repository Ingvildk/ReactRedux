import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../store/counterStore';
import Counter from '../components/Counter';
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
// this state 
var todos = this.state.value.todo;
var TodoList = todos;

var callRender = () => {
  	//this is the increment function
    const ing = actionCreators.increment();
    console.log("----increment----");
    console.log(ing);
    const decrement = actionCreators.decrement();
    return (
      <div>
        <Counter onClickDecrement = { () => 
          store.dispatch({decrement})
        }
         onClickIncrement = { () => 
           store.dispatch({ing})
         } />
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
          {todos.map( (todo) => {
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

