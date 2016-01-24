import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
console.log('counterStore running');
console.log("rootReducer");
console.log(rootReducer);
//we only export one function. Don't need import * as typed from '..'
/*the reducer is the counter function:
	counter() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
*/

/*
console.log("reducerStore running");
console.log("the reducer:");
console.log(reducer);
*/
let store = createStore(rootReducer);
console.log("store.getState()");
console.log(store.getState());

/*
console.log("----");
console.log("the store");

perfect!
store object with the essential dispacth, getState and subscribe functions
console.log(store);
*/
export default store;