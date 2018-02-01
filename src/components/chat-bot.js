import React from 'react';

import './chat-bot.css';
import shrubbot from './images/shrub-bot.png';

export default class ChatBot extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.input.value);
        this.input.value = '';
    }

    componentDidMount() {
        if (!this.props.messageHistory && !this.props.loadingConveration) {
            if (this.props.startConversation) {
                this.props.startConversation();
            }
        }
    }

    render() {
        const content = this.props.messageHistory ?
            (<div className='bot'>
                <h1>Now chatting with SHRUB</h1>
                <div id='shrubimg'>
                    <img id='shrub-mascot' className='hidden' src={shrubbot} />
                </div>
                <div className='hidden tip-box-2'>
                    <h3>TIP:</h3>
                    <span>SHRUB knows some things about computers.  Try asking her how to reboot your computer. </span>
                </div>
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
                    {/* ^^^make new component and use key */}
                </div>
                <div className='response-area'>
                    <form className='chat-area' onSubmit={(e) => this.onSubmit(e)}>
                        <input type='text' className='chat-field' placeholder='Enter your message here' ref={(input) => this.input = input}></input>
                        <input type='submit' className='submit'></input>
                    </form>
                </div>
            </div>) : 'loading conversation';
        return (
            <div className='bot'>
                {content}
            </div>

        )
    }
}
