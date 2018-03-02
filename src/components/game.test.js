import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
	it('Renders without crashing', () => {
		shallow(<Game/>);
	});

	it('Should start a new game', () => {
		const wrapper = shallow(<Game/>);
		wrapper.setState({
			correctAnswer: 101,
			results: `You're very cold`,
			guesses: [5, 10, 15]
		});
		wrapper.instance().newGame();
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
		expect(wrapper.state('results')).toEqual('Start guessing!');
		expect(wrapper.state('guesses')).toEqual([]);
	});

	it('Should make guesses', () => {
		const wrapper = shallow(<Game/>);
		
		wrapper.setState({
			correctAnswer: 33
		});

		wrapper.instance().submitGuess(32);
		expect(wrapper.state('guesses')).toEqual([32]);
		expect(wrapper.state('results')).toEqual(`You're burning up!`);

		wrapper.instance().submitGuess(43);
		expect(wrapper.state('guesses')).toEqual([32, 43]);
		expect(wrapper.state('results')).toEqual(`Hot`);

		wrapper.instance().submitGuess(53);
		expect(wrapper.state('guesses')).toEqual([32, 43, 53]);
		expect(wrapper.state('results')).toEqual(`Getting even warmer`);

		wrapper.instance().submitGuess(83);
		expect(wrapper.state('guesses')).toEqual([32, 43, 53, 83]);
		expect(wrapper.state('results')).toEqual(`Cold`);

		wrapper.instance().submitGuess(33);
		expect(wrapper.state('guesses')).toEqual([32, 43, 53, 83, 33]);
		expect(wrapper.state('results')).toEqual(`You got it!`);
	});
});