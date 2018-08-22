import React from "react";
import ReactDOM from "react-dom";

import "./chat-bot.css";
import shrubbot from "./images/shrub-bot.png";

export default class ChatBot extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.input.value);
    this.input.value = "";
  }
  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    if (node != null) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  };

  componentDidMount() {
    if (!this.props.messageHistory && !this.props.loadingConveration) {
      if (this.props.startConversation) {
        this.props.startConversation();
      }
    }
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const content = this.props.messageHistory ? (
      <div className="bot">
        <div id="side-container">
          <div id="shrubimg">
            <img
              id="shrub-mascot"
              className="hidden"
              src={shrubbot}
              alt="SHRUB Bot"
            />
          </div>
          <div className="hidden tip-box-2">
            <h3>TIP:</h3>
            <span>
              SHRUB knows <i>some</i> things about computers, but she's still
              learning! Try asking her:
              <ul>
                <li>How to reboot your computer.</li>
                <li>What to do if your mouse isn't working.</li>
                <li>How to print something.</li>
                <li>How to remedy a locked up computer</li>
                <li>What to do if your computer is smoking!</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="chatbox">
          <h1>Now chatting with SHRUB</h1>
          {this.props.messageHistory.map((message, index) => {
            const content = message.content;
            const sender = message.sender;
            const messageClass =
              sender === "bot" ? "messages-bot" : "messages-user";
            return (
              <div className={messageClass + " message"} key={index}>
                {content}
              </div>
            );
          })}
          <div
            style={{ float: "left", clear: "both" }}
            ref={el => {
              this.messagesEnd = el;
            }}
          />
        </div>
        <div className="response-area">
          <form className="chat-area" onSubmit={e => this.onSubmit(e)}>
            <input
              type="text"
              className="chat-field"
              placeholder="Enter your message here"
              ref={input => (this.input = input)}
            />
            <input type="submit" className="submit" />
          </form>
        </div>
      </div>
    ) : (
      "loading conversation"
    );
    return <div className="bot">{content}</div>;
  }
}
