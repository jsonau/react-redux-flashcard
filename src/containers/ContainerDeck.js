import { connect } from 'react-redux'
import Deck from '../components/Deck'
import { addCard } from '../actions'

const mapStateToProps = (state) => {
	if (state.currentDeck.id === ""){
		return { deck: undefined, cards:[] } 
	}

	return {
		deck: state.decks.byId[state.currentDeck.id],
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		addCard:(deckId, q,a) =>{
			dispatch(addCard(deckId, q,a))
		}
	}
}


const ContainerDeck = connect(
	mapStateToProps,
	mapDispatchToProps
)(Deck)

export default ContainerDeck