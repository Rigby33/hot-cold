import React from 'react';
import {shallow} from 'enzyme';

import NewGame from './NewGame';

describe('<NewGame/>', () => {
	it('Renders without crashing', () => {
		shallow(<NewGame/>);
	});
	it('Should fire newgame callback on click', () => {
		const callback = jest.fn();
		const wrapper = shallow(<NewGame newgame={callback}/>);
		const newGameButton = wrapper.find('button');
		newGameButton.simulate('click');
		expect(callback).toHaveBeenCalled();
	});
});
