import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import reducer, { initialState } from './store/reducer';

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logger, thunk)
)


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);



