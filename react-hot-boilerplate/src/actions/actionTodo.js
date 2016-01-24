const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

export function addtodo(userInput) {
	return { 
		type: ADD_TODO,
		text: userInput
		};
}

export function deleteTodo(ID) {
	return {
		type: DELETE_TODO,
		id: ID
	};
}