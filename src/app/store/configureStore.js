import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

const configureStore = () => {
  const store = createStore(rootReducer, devToolsEnhancer());
  return store;
};

export default configureStore;
