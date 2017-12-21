import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const configureStore = (preLoadedState) => createStore(rootReducer, preLoadedState, applyMiddleware(thunk));



export default configureStore;