import React from 'react';

//import ServiceCheck from './containers/service-check';
import Main from './containers/main';
import Landing from './components/landing';
import Header from './components/header';
import ChatBot from './components/chat-bot';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      continueClicked: true,
    }
  }
  render() {
    //if statement: if continueClicked = false, deliver landing
    if (this.state.continueClicked) {
      return (
        <div>
          <Header />
          <Main />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Landing />
        </div>
      );
    }
    //else, deliver the chatbot component
  }
}
