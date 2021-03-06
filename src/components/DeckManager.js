import React, { PropTypes } from 'react'

class DeckManager extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title:''};
	}

	onNewDeckSubmit(e){
		e.preventDefault();

		// if given title is empty, dont proceed
		if (this.state.title === "") return;

		// if title is not unique, dont proceed!
		if (this.props.decks.map(function(d){ return d.title }).indexOf(this.state.title) >= 0) return;

		this.props.newDeck(this.state.title);

		this.setState({title: ''})
	}

	onInputChange(e){
	    this.setState({title: e.target.value});
	}

	render(){
		return(
			<div className="deckManager">
				<form onSubmit={this.onNewDeckSubmit.bind(this)}>
					<input type="text" value={this.state.title} placeholder="Give a title for a newdeck" onChange={this.onInputChange.bind(this)} />
					<input type="submit"/>
				</form>

				<ul className="deckList">
					{this.props.decks.map(deck =>
						<li key={deck.id} onClick={()=>this.props.selectDeck(deck.id)}>{deck.title} <span className="counter">{deck.cards.length}</span></li>
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