import { combineReducers } from 'redux'
import { ADD_DECK, ADD_CARD_TO_DECK } from '../constants/ActionType'

const initialState = {
	"byId": {
		"123":{
			"id": "123",
			"title": 'Physics',
			"cards": [],
		},
		"345":{
		    id: "345",
		    title: "Biology",
		    cards: []
		}
	},

	"allIds":["123", "345"]
};

const deck = (state, action) => {
	switch(action.type){
		case ADD_DECK:
			return {
				id: action.id,
				title: action.title,
				cards: []
			};
		case ADD_CARD_TO_DECK:
			return {
				id: state.id,
				title: state.title,
				cards: state.cards.concat(action.cardId)
			};
		default:
			return state;
	}
}

const byId = (state=initialState.byId, action) =>{
	switch(action.type){
		case ADD_DECK:
			return {
				...state,
				[action.id]: deck(state[action.id], action)
			};
		case ADD_CARD_TO_DECK:
			return {
				...state,
				[action.id]: deck(state[action.id], action)
			}
		default:
			return state;
	}
}

const allIds = (state=initialState.allIds, action) =>{
	switch(action.type){
		case ADD_DECK:
			return [
				...state,
				action.id
			]
		default:
			return state;
	}
}

const decks = combineReducers({
	byId,
	allIds,
})

export default decks;

