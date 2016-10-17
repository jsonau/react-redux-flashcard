import React, { PropTypes } from 'react'

class Deck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {q: '', a: ''};
	}

	addCard(e){
		e.preventDefault()
		console.log(this.state.q + " ---> " + this.state.a)
		this.props.addCard(this.props.deck.id, this.state.q, this.state.a)
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
					<input name="question" type="text" onChange={this.handleCardInputQ.bind(this)} />

					<label htmlFor="answer">A</label>
					<input name="answer" type="text" onChange={this.handleCardInputA.bind(this)} />

					<input type="submit"/>
				</form>
			</div>
		)
	}
}

export default Deck