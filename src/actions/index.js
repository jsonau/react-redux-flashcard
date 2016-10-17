import * as types from '../constants/ActionType'
var uuid = require('uuid');

export const addDeck = (title) => ({ type: types.ADD_DECK, id:uuid.v1(), title:title})
