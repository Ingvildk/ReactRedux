import uuid from 'uuid';

/*
	para: the current state. No default parameter.
		  the action object which invoked the state change
	output: a new todo object. To be added to array/ modified
*/
var nextTodoId = 0;
const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: nextTodoId++,
				type: 'California er best!',
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				completed: !state.completed
			}
		default:
			return state;
	}
}; 

/*	
	para: current state. Array of state objects. 
		  Action object which envoked the state change
	output: the next state. An array of state objects.
*/
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'DELETE_TODO': 
			console.log("inside reducertodo DELETE_TODO. This is the state");
			console.log(state);
			return state.filter((note) => note.id !== action.id);
		case 'TOGGLE_TODO': 
			return state.map(t => 
				todo(t,action)
				);
		default:
			return state;	
}
};

export default todos; 
