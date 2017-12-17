import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';

const store = configStore({});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
