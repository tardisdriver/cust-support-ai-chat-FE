import React from 'react';
import { shallow, mount } from 'enzyme';

import ServiceCheck from './service-check';

describe('<ServiceCheck />', () => {
    it('renders ServiceCheck without crashing', () => {
        shallow(<ServiceCheck />)
    });
    it('should make request to the api on submit', () => {
        const callback = jest.fn();
        callback.mockImplementation(serviceNumber => {
            return Promise.resolve(null)
        });
        const serviceNumber = 'ABC123';
        const wrapper = mount(<ServiceCheck submitServiceNumber={callback} />);
        wrapper.find('input[type="text"]').instance().value = serviceNumber;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(serviceNumber);
    });

    it('should not show the error message before submitting', () => {
        const callback = jest.fn();
        const serviceNumber = 'ABC123';
        const wrapper = mount(<ServiceCheck submitServiceNumber={callback} />);
        const element = wrapper.find('.error-message');
        expect(element).toHaveLength(0);
    });

    it('should return error message if number does not exist', async () => {
        const callback = jest.fn();
        const serviceNumber = 'ABC123';
        callback.mockImplementation(serviceNumber => {
            return Promise.resolve(null)
        });
        const wrapper = mount(<ServiceCheck submitServiceNumber={callback} />);
        wrapper.find('input[type="text"]').instance().value = serviceNumber;
        wrapper.simulate('submit');
        await Promise.resolve();
        wrapper.update();
        const element = wrapper.find('.error-message');
        expect(element).toHaveLength(1);
    });
});
