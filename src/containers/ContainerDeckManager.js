import { connect } from 'react-redux'
import DeckManager from '../components/DeckManager'


const mapStateToProps = (state) => {
	return {
		decks: state.allIds.map(function(id){
			console.log(state.byId[id])
			return(state.byId[id])
		})
	}
}

const ContainerDeckManager = connect(
	mapStateToProps
)(DeckManager)

export default ContainerDeckManager