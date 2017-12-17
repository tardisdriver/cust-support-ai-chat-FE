import { createStore } from 'redux';

import rootReducer from './reducers';

const configureStore = (preLoadedState) => createStore(rootReducer, preLoadedState);

export default configureStore;