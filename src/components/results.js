import React from 'react';
import './results.css'

export default function GuessResults(props) {
	return (
		<div className="results">
			<h2>{props.results}</h2>
		</div>
	);
}