import * as types from '../constants/ActionType'
var uuid = require('uuid');

export const addDeck = (title) => ({ type: types.ADD_DECK, id:uuid.v1(), title:title})
export const addCardToDeck = (id, cardId) => ({ type: types.ADD_CARD_TO_DECK, id:id, cardId: cardId })

export const selectDeck = (id) => ({ type: types.SELECT_DECK, id:id })

export const addCard = (deckId, q, a) => ({ type: types.ADD_CARD, id:uuid.v1(), q:q, a:a })

