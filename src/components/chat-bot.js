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
            this.props.startConversation();
        }
    }

    render() {
        const content = this.props.messageHistory ?
            (<div className='bot'>
                <h1>Now chatting with SHRUB</h1>
                <div id='shrubimg'>
                    <img id='shrub-mascot' className='hidden' src={shrubbot} />
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

// make loading screen between events
// dispatch an action in redux - chat loading request - succeeded/failed - onDidMount -> dispatch event chat_load_request
// chat_load succeeded vs chat_load failed
