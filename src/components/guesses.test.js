import React from 'react';
import {shallow} from 'enzyme';

import Guesses from './guesses';

describe('<Guesses/>', () => {
	it('Render without crashing', () => {
		const seedGuesses = [];
		for(let i = 0; i < 5; i++) {
			seedGuesses.push(i);
		}
		shallow(<Guesses guesses={seedGuesses}/>);
	});

	it('Should display guesses made', () => {
		const newGuesses = [5, 10, 20, 30];
		const wrapper = shallow(<Guesses guesses={newGuesses}/>);
		const guessList = wrapper.find('li');
		expect(guessList.length).toEqual(newGuesses.length);
		newGuesses.forEach((guess, index) => {
			expect(guessList.at(index).text()).toEqual(guess.toString());
		});
	});
});