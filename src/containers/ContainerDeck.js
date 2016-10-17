import { connect } from 'react-redux'
import Deck from '../components/Deck'
import { addCard, addCardToDeck } from '../actions'

const mapStateToProps = (state) => {
	if (state.currentDeck.id === ""){
		return { deck: undefined, cards:[] } 
	}

	var deck = state.decks.byId[state.currentDeck.id];

	return {
		deck: deck,
		cards: deck.cards.map(function(cardId){ return state.cards.byId[cardId] })
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		addCard:(deckId, q,a) =>{
			var addCardAction = dispatch(addCard(deckId, q,a))
			dispatch(addCardToDeck(deckId, addCardAction.id))
		}
	}
}


const ContainerDeck = connect(
	mapStateToProps,
	mapDispatchToProps
)(Deck)

export default ContainerDeck