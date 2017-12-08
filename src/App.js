import React from 'react';

import ServiceCheck from './components/service-check';
import Landing from './components/landing';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Landing />
        <ServiceCheck />
      </div>
    );
  }
}
