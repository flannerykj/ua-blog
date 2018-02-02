import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import rootReducer from './reducers'
import {routes} from './routes';
import initialStore from './initialStore';
import './sass/main.scss';
import {getLabels} from './actions';


const history = createHistory()
const middleware = routerMiddleware(history)

const store = applyMiddleware(thunk,logger,middleware)(createStore)(rootReducer,initialStore);

// dispatch navigation actions from anywhere:
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className='wrapper'>
        {routes}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

store.dispatch(getLabels());
