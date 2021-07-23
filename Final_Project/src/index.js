import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux'
import App from './App';
import { Provider } from 'react-redux'
import { rootReducer } from './Redux/rootReducer'
import reduxThunk from 'redux-thunk'

const store = createStore(rootReducer, compose(applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
  app,
  document.getElementById('root')
);
