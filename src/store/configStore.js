import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

//const configureStore = (preLoadedState) => createStore(rootReducer, preLoadedState);

export default createStore(rootReducer, applyMiddleware(thunk));