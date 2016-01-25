import React, { Component } from 'react';
import * as actionCreators from '../actions/actionCounter';
import store from '../store/counterStore';

export default class Counter extends Component {
/*
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
*/


	render() {
		const decrement = actionCreators.decrement();

		console.log(decrement);

		const onClickI= this.props.onClickIncrement;
		console.log("onClickIncrement");
		console.log(onClickI);
		return (
	      <div>
	        <button onClick = { () => 
          store.dispatch({decrement})
        } >
	          {decrement.type}
	        </button> 
	        <button onClick = {onClickI.bind(null,this)} >
	          wrong
	        </button>
	      </div>  
			);
	}
}