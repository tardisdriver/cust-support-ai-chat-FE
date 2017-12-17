import React from 'react';
import { Provider } from 'react-redux';

import ServiceCheck from './components/service-check';
import Landing from './components/landing';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Landing />
        <ServiceCheck />
      </Provider>
    );
  }
}
