import React from 'react';
import './newgame.css';

export default function NewGame(props) {
	return (
		<div className="newgame">
		<button onClick={() => props.newgame()}>New Game</button>
		</div>
		);
}