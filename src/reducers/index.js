import  decks  from './decks'
import currentDeck from './currentDeck'
import { combineReducers } from 'redux'


const app = combineReducers({
	decks,
	currentDeck
})

export default app;