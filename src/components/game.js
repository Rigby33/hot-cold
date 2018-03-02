import React from 'react';

import GuessWrapper from './guessWrapper';

import './game.css';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			correctAnswer: Math.floor(Math.random()*100)+1,
			results: 'Start guessing!',
			guesses: []
		}
	}

	newGame() {
		this.setState({
			correctAnswer: Math.floor(Math.random()*100)+1,
			results: 'Start guessing!',
			guesses: []
		})
	}
		submitGuess(guess) {
			guess = parseInt(guess, 10);
			const difference = Math.abs(guess - this.state.correctAnswer);
			let results;
			if (difference >= 50) {
				results = `Cold`;
			} else if (difference >= 30) {
				results = `Getting warmer`;
			} else if (difference >= 20) {
				results = `Getting even warmer`;
			} else if (difference >= 10) {
				results = `Hot`;
			} else if (difference >= 1) {
				results = `You're burning up!`
			} else {
				results = `You got it!`
			}

			this.setState({
				results,
				guesses: [...this.state.guesses, guess],
			});
		}

	render() {
		return (
			<div className="hotcoldgame">
			<h1>Hot or Cold</h1>
			<GuessWrapper guessnumber={this.state.guesses.length} guesses={this.state.guesses} newgame={() => this.newGame()} onSubmitGuess={guess => this.submitGuess(guess)} results={this.state.results}/>
			</div>
		);
	}
}