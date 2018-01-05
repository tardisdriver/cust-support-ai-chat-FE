import React from 'react';

//import ServiceCheck from './containers/service-check';
import Main from './containers/main';
import Landing from './components/landing';

export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isVerified : false
  //   }
  // }
  render() {
    return (
      <div>
        <Landing />
        {/* <ServiceCheck /> */}
        <Main />
      </div>
    );
  }
}
