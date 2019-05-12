import { createStore, applyMiddleware } from 'redux';

import rootReducer from './redux/reducer';

const configureStore = () => {
  return {
    ...createStore(rootReducer)
  }
};

export default configureStore;
