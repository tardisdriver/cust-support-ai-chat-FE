import React from 'react';
import { shallow, mount } from 'enzyme';

import ServiceCheck from './service-check';

describe('<ServiceCheck />', () => {
    it('renders ServiceCheck without crashing', () => {
        shallow(<ServiceCheck />)
    });
    it('should make request to the api on submit', () => {
        const callback = jest.fn();
        const serviceNumber = 'ABC123';
        const wrapper = mount(<ServiceCheck submitServiceNumber={callback} />);
        wrapper.find('input[type="text"]').instance().value = serviceNumber;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(serviceNumber);
    });

    //});
    //it('should take user to next page if service number exists', () => {

    //});
    it('should return error message if number does not exist', () => {
        const callback = jest.fn();
        const serviceNumber = 'ABC123';
        callback.mockImplementation(serviceNumber => {
            Promise.resolve(null)
        });
        const wrapper = mount(<ServiceCheck submitServiceNumber={callback} />);
        wrapper.find('input[type="text"]').instance().value = serviceNumber;
        wrapper.simulate('submit');
        const element = wrapper.find('.errorMessage');
        expect(element).toHaveLength(1);
    });
});
