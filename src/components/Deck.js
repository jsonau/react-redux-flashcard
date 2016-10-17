import React, { PropTypes } from 'react'

class Deck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {q: '', a: ''};
	}

	addCard(e){
		e.preventDefault();
		this.props.addCard(this.props.deck.id, this.state.q, this.state.a);
		this.setState({q: '', a: ''});
	}
	handleCardInputQ(e){
	    this.setState({q: e.target.value});
	}
	handleCardInputA(e){
	    this.setState({a: e.target.value});
	}

	render(){
		// when there are no chosen deck
		if (this.props.deck === undefined){
			return (<div className="choose">Please choose a deck!</div>)
		}

		return(
			<div className="deck">
				<h2>{this.props.deck.title}</h2>
				<form className="cardForm" onSubmit={this.addCard.bind(this)}>
					<p>Fill the following to create new flash cards</p>
					<label htmlFor="question">Q</label>
					<input name="question" type="text" value={this.state.q} onChange={this.handleCardInputQ.bind(this)} />

					<label htmlFor="answer">A</label>
					<input name="answer" type="text" value={this.state.a} onChange={this.handleCardInputA.bind(this)} />

					<input type="submit"/>
				</form>

				<div className="cardList">
					{this.props.cards.map(card=>
						<div className="card" key={card.id}>
							<div className="question">Q: {card.q}</div>
							<div className="answer">A: {card.a}</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default Deck