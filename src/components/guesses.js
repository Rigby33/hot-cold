import React from 'react';
import './guesses.css';

export default function Guesses(props) {
	const guesses = props.guesses.map((guess, index) => <li key={index}>{guess}</li>);
	return (
		<div className="guesses">
			<ul>
				{guesses}
			</ul>
		</div>
	);
}