import React from 'react';
import './guessingform.css'

export default class GuessingForm extends React.Component {
	onSubmit(event) {
		event.preventDefault();
		const numberGuess = this.numberInput.value;
		this.props.onSubmitGuess(numberGuess);
		this.numberInput.value = '';
	}

	render() {
	return (
		<form onSubmit={e => this.onSubmit(e)}>
		<input max="100" min="1" type="number" placeholder="Enter your guess" ref={input => (this.numberInput = input)} required/>
		<button type="sumbit">Guess</button>
		</form>
		);
}
}