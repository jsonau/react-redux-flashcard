import { combineReducers } from 'redux'

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
		default:
			return state;
	}
}

const byId = (state=initialState.byId, action) =>{
	switch(action.type){
		default:
			return state;
	}
}

const allIds = (state=initialState.allIds, action) =>{
	switch(action.type){
		default:
			return state;
	}
}

const decks = combineReducers({
	byId,
	allIds,
})

export default decks;

