import { connect } from 'react-redux'
import DeckManager from '../components/DeckManager'
import { addDeck } from '../actions'


const mapStateToProps = (state) => {
	return {
		decks: state.decks.allIds.map(function(id){
			console.log(state.decks.byId[id])
			return(state.decks.byId[id])
		})
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		newDeck:(title) =>{
			dispatch(addDeck(title))
		}
	}
}


const ContainerDeckManager = connect(
	mapStateToProps,
	mapDispatchToProps
)(DeckManager)

export default ContainerDeckManager