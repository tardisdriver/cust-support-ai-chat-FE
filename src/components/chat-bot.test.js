import React from 'react';
import { shallow, mount } from 'enzyme';

import ChatBot from './chat-bot';

describe('<ChatBot />', () => {
    it('renders ChatBot without crashing', () => {
        shallow(<ChatBot messageHistory={[{ sender: 'bot', content: "Testing" }]} />)
    });

    it('should display messages', () => {
        expect.assertions(3);
        const wrapper = mount(<ChatBot messageHistory={[{ sender: 'bot', content: "Testing" }, { sender: 'user', content: 'Testing as well' }]} />);
        expect(wrapper.find('.message')).toHaveLength(2);
        const firstMessage = wrapper.find('.chatbox').childAt(0);
        expect(firstMessage.text()).toBe('Testing');
        const secondMessage = wrapper.find('.chatbox').childAt(1);
        expect(secondMessage.text()).toBe('Testing as well');
    });

    it('should assign appropriate css class to message', () => {
        expect.assertions(2);
        const wrapper = mount(<ChatBot messageHistory={[{ sender: 'bot', content: "Testing" }, { sender: 'user', content: 'Testing as well' }]} />);
        const firstMessage = wrapper.find('.chatbox').childAt(0);
        const secondMessage = wrapper.find('.chatbox').childAt(1);
        expect(firstMessage.hasClass('messages-bot')).toBe(true);
        expect(secondMessage.hasClass('messages-user')).toBe(true);
    });

    it('allows user to send message', () => {
        expect.assertions(1);
        const callback = jest.fn();
        const wrapper = mount(<ChatBot messageHistory={[]} sendMessage={callback} conversationID='TESTING' />);
        const message = 'Testing now';
        wrapper.find('input[type="text"]').instance().value = message;
        wrapper.find('form').simulate('submit');
        expect(callback).toHaveBeenCalledWith(message, 'TESTING');
    });
});