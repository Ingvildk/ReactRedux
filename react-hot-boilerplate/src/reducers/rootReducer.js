/*
	the issue is in this file.
	Compiler can't find the variables reducerCounter 
	and the reducerTodo so a new object can not be created
	
	Something is wrong when using combineReducers
	1)	Wrong in parameters 
	2)  Wrong way to use combineReducers.
	3)  Wrong way to import rootReducer in counterStore
*/
import count from  './redcuerCounter';

import todo from './reducerTodo';

import { combineReducers } from 'redux'


export default combineReducers({
  count,
  todo
});
