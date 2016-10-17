import  decks  from './decks'
import currentDeck from './currentDeck'
import  cards  from './cards'
import { combineReducers } from 'redux'


const app = combineReducers({
	decks,
	currentDeck,
	cards
})

export default app;