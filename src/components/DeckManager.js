import React, { PropTypes } from 'react'

class DeckManager extends React.Component {
	render(){
		return(
			<div className="deckManager">
				<ul className="deckList">
					{this.props.decks.map(deck =>
						<li key={deck.id} onClick={()=>this.props.onSelectDeck(deck.id)}>{deck.title}</li>
					)}
				</ul>
			</div>
		)
	}
}


DeckManager.propTypes = {
	decks: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
	})).isRequired
}

export default DeckManager