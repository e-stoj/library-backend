import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { 
  routerMiddleware, 
  ConnectedRouter 
} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import rootReducer from './state';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

const reduxMiddlewares = [
  thunk,
  routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...reduxMiddlewares)
));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
