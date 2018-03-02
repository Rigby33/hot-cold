import React from 'react';

import GuessingForm from './guessingform';
import GuessResults from './results';
import NumberOfGuesses from './numberOfGuesses';
import NewGame from './newgame';
import Guesses from './guesses';

import './guesswrapper.css';

export default function GuessWrapper(props) {
	return (
		<div className="hotcold">
			<GuessResults results={props.results}/>
			<GuessingForm onSubmitGuess={guess => props.onSubmitGuess(guess)}/>
			<NumberOfGuesses guessnumber={props.guessnumber}/>
			<Guesses guesses={props.guesses}/>
			<NewGame newgame={() => props.newgame()}/>
		</div>
	);
}