import React from 'react';

import Main from './containers/main';
import Landing from './components/landing';
import Header from './components/header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      continueClicked: false,
    };
  }

  setContinue = () => {
    this.setState({
      continueClicked: true
    });
  }

  render() {
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
          <Landing action={this.setContinue} />
        </div>
      );
    }
  }
}
