import React from 'react';
import ChatBot from '../containers/chat-bot';
import ServiceCheck from '../containers/service-check';

export default function (props) {
    if (props.customerFound) {
        return (
            <ChatBot />
        )
    } else {
        return (
            <ServiceCheck />
        )
    }
}