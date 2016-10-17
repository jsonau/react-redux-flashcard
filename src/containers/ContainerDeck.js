import { connect } from 'react-redux'
import Deck from '../components/Deck'

const mapStateToProps = (state) => {
	if (state.currentDeck.id === ""){
		return { deck: undefined, cards:[] } 
	}

	return {
		deck: state.decks.byId[state.currentDeck.id],
	}
}


const ContainerDeck = connect(
	mapStateToProps,
)(Deck)

export default ContainerDeck