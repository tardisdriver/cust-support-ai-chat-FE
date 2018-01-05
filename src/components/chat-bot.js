import React from 'react';

export default class ChatBot extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.input.value);
    }

    render() {
        return (
            <div>
                <h1>Chatting with SHRUB</h1>
                <div className="chatbox">
                    {this.props.messageHistory.map((message, index) => {
                        const content = message.content;
                        const sender = message.sender;
                        const messageClass = sender == 'bot' ? 'messages-bot' : 'messages-user';
                        return (
                            <div className={messageClass + ' message'} key={index}>
                                {content}
                            </div>
                        )
                    })}
                </div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input type='text' placeholder='Enter your message here' ref={(input) => this.input = input}></input>
                    <input type='submit'></input>
                </form>
            </div>

        )
    }
}

//prop messageHistory = array of objects with a certain shape
//shape => content of message, which party sent the message
//{ content: String, sender: String }
//prop sendMessage function
//      params = content of the message (String)
//      returns undefined