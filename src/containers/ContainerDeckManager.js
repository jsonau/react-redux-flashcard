import { connect } from 'react-redux'
import DeckManager from '../components/DeckManager'
import { addDeck } from '../actions'


const mapStateToProps = (state) => {
	return {
		decks: state.allIds.map(function(id){
			console.log(state.byId[id])
			return(state.byId[id])
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