import React, { PropTypes } from 'react'

class Deck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {q: '', a: ''};
	}

	render(){
		// when there are no chosen deck
		if (this.props.deck === undefined){
			return (<div className="choose">Choose a deck!</div>)
		}

		return(
			<div className="deck">
				<h2>{this.props.deck.title}</h2>
			</div>
		)
	}
}

export default Deck