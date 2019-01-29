import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const store = createStore(
        reducer,  
        compose(applyMiddleware(thunk)));

export default store;