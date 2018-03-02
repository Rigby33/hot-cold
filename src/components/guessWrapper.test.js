import React from 'react';
import {shallow} from 'enzyme';

import GuessWrapper from './guessWrapper';

describe('<GuessWrapper/>', () => {
	it('Renders without crashing', () => {
		shallow(<GuessWrapper/>);
	});
});