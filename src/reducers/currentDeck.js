import { SELECT_DECK } from '../constants/ActionType'

const initialState = {
	'id': ''
};

const currentDeck = (state=initialState, action) =>{
	switch(action.type){
		case SELECT_DECK:
			return {
				id: action.id
			}
		default:
			return state
	}
}

export default currentDeck