import { connect } from 'react-redux'
import DeckManager from '../components/DeckManager'
import { addDeck, selectDeck } from '../actions'


const mapStateToProps = (state) => {
	return {
		decks: state.decks.allIds.map(function(id){
			return(state.decks.byId[id])
		})
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		newDeck:(title) =>{
			dispatch(addDeck(title))
		},

		selectDeck:(id) => { 
			dispatch(selectDeck(id))
		},

	}
}


const ContainerDeckManager = connect(
	mapStateToProps,
	mapDispatchToProps
)(DeckManager)

export default ContainerDeckManager