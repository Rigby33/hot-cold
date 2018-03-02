import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessingForm from './guessingform';

describe('<GuessingForm/>', () => {
	it('Renders without crashing', () => {
		shallow(<GuessingForm/>);
	});

	it('Should fire onSubmitGuess callback when submitted', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessingForm onSubmitGuess={callback}/>);
			const guess = 5;
			wrapper.find('input[type="number"]').instance().value = guess;
				wrapper.simulate('submit');
					expect(callback).toHaveBeenCalledWith(guess.toString());
	});
});