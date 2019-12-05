import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import createStore from './src/createStore';
import App from './App';
import * as serviceWorker from './serviceWorker';
const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
//serviceWorker.unregister();