import React from 'react';
import {shallow} from 'enzyme';

import NumberOfGuesses from './numberOfGuesses';

describe('<NumberOfGuesses/>', () => {
	it('Renders without crashing', () => {
		shallow(<NumberOfGuesses/>);
	});

	it('Should render number of guesses made', () => {
		const guesscount = '5';
		const wrapper = shallow(<NumberOfGuesses guessnumber={guesscount}/>);
		expect(wrapper.contains(guesscount)).toEqual(true);
	});
});