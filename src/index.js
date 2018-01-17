import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/configStore';
import { Provider } from 'react-redux';

const store = configStore({});

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
