import React from 'react';

export default class ChatBot extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.input.value);
    }

    componentDidMount() {
        if (!this.props.messageHistory && !this.props.loadingConveration) {
            this.props.startConversation();
        }
    }

    render() {
        const content = this.props.messageHistory ?
            (<div>
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
            </div>) : 'loading conversation';
        return (
            <div>
                {content}
            </div>

        )
    }
}

// make loading screen between events
// dispatch an action in redux - chat loading request - succeeded/failed - onDidMount -> dispatch event chat_load_request
// chat_load succeeded vs chat_load failed
