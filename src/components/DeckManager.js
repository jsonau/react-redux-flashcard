import React, { PropTypes } from 'react'

class DeckManager extends React.Component {
	constructor(props) {
		super(props);
		this.state = {title:''};
	}

	onNewDeckSubmit(e){
		e.preventDefault();
		if (this.state.title === "") return;
		this.props.newDeck(this.state.title);

	}

	onInputChange(e){
	    this.setState({title: e.target.value});
	}

	render(){
		return(
			<div className="deckManager">
				<form onSubmit={this.onNewDeckSubmit.bind(this)}>
					<input type="text" placeholder="Give a title for a newdeck" onChange={this.onInputChange.bind(this)} />
					<input type="submit"/>
				</form>

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