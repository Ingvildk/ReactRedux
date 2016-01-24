/*
	para: current state and action object
	output: reducer object next state. ONLY ONE THING(a number)
*/
const counter =  (state = 0, action)  => {
	switch (action.type) {
		case 'INCREMENT': 
			return state + 1;
		case 'DECREMENT':
			return state - 1;	
		default:
			return state;	
	}
}

export default counter; 
