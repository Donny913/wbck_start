import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import App from './App';

const Launcher = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Launcher />, document.querySelector('#root'));
