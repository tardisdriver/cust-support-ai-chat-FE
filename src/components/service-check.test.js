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
        const wrapper = mount(<ServiceCheck invalidNumber={false} submitServiceNumber={callback} />);
        wrapper.find('input[type="text"]').instance().value = serviceNumber;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(serviceNumber);
    });

    it('should not show the error message before submitting', () => {
        const callback = jest.fn();
        const wrapper = mount(<ServiceCheck invalidNumber={false} submitServiceNumber={callback} />);
        const element = wrapper.find('.error-message');
        expect(element).toHaveLength(0);
    });

    it('should return error message if number does not exist', () => {
        const callback = jest.fn();
        const wrapper = mount(<ServiceCheck invalidNumber={true} submitServiceNumber={callback} />);
        const element = wrapper.find('.error-message');
        expect(element).toHaveLength(1);
    });

    it('should render error messages', () => {
        const callback = jest.fn();
        const wrapper = mount(<ServiceCheck error='ERROR' invalidNumber={false} submitServiceNumber={callback} />);
        const element = wrapper.find('.error-message');
        expect(element).toHaveLength(1);
    });
});
