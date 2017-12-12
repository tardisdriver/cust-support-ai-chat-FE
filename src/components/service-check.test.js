import React from 'react';
import { shallow } from 'enzyme';

import ServiceCheck from './service-check';

describe('<ServiceCheck />', () => {
    it('renders ServiceCheck without crashing', () => {
        shallow(<ServiceCheck />)
    });
    //it('should call api when number is submitted', () => {
        //const callback = jest.fn();
        //const wrapper = mount(<ServiceCheck onSubmit={callback} />);
        //wrapper.simulate('submit');
        //expect()
    //});
    //it('should take user to next page if service number exists', () => {

    //});
    //it('should return error message if number does not exist', () => {

    //});
});
