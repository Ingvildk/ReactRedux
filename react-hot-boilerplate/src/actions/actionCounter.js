/*
	input: current state, if no such thing return default state 0
	para: an action object. The component calls this object and it will 
		  be  parameter in the store.dispatch beeing called
*/
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export function increment() {
	return { type: INCREMENT };
};

export function decrement() {
	return { type: DECREMENT };
};

