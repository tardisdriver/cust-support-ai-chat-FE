import React from 'react';
import { shallow } from 'enzyme';

import ServiceCheck from './service-check';

describe('<ServiceCheck />', () => {
    it('renders ServiceCheck without crashing', () => {
        shallow(<ServiceCheck />)
    });
    it('should call api when number is submitted', () => {
        const callback = ;
        const wrapper = mount(<ServiceCheck onSubmit={callback} />);
        wrapper.simulate('submit');
        expect()
    })
});