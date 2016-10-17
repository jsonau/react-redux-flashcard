import { ADD_CARD } from '../constants/ActionType'
import { combineReducers } from 'redux'

const card = (state,action) =>{
	switch(action.type){
		case ADD_CARD:
			return {
				id: action.id,
				q: action.q,
				a: action.a	
			};
		default:
			return state;
	}	
}

const byId = (state = {}, action)=>{
	switch(action.type){
		case ADD_CARD:
			console.log({
				...state,
				[action.id]: card(state[action.cardId], action)
			});
			return {
				...state,
				[action.id]: card(state[action.cardId], action)
			}
		default:
			return state;
	}
}

const cards = combineReducers({
	byId
})

export default cards