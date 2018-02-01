import React from 'react';

import './chat-bot.css';


export default function ChatBox(props) {
    <div className="chatbox">
        {this.props.messageHistory.map((message, index) => {
            const content = message.content;
            const sender = message.sender;
            const messageClass = sender === 'bot' ? 'messages-bot' : 'messages-user';
            return (
                <div className={messageClass + ' message'} key={index}>
                    {content}
                </div>
            )
        })}
    </div>
}