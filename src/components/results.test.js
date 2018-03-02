import React from 'react';
import {shallow} from 'enzyme';

import GuessResults from './results';

describe('<GuessResults/>', () => {
	it('Renders without crashing', () => {
		shallow(<GuessResults/>);
	});

	it('Should give results of guess', () => {
		const result = `You're ice cold`;
		const wrapper = shallow(<GuessResults results={result}/>);
		expect(wrapper.contains(result)).toEqual(true);
	})
});