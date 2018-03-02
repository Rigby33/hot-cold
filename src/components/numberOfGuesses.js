import React from 'react';
import './numberofguesses.css'

export default function NumberOfGuesses(props) {
	return (
		<div className="guessnumber">
			<h3>Guess #{props.guessnumber}</h3>
		</div>
	);
}