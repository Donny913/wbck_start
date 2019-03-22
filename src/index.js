import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';
import App from './App';

const Launcher = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={App} />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<Launcher />, document.querySelector('#root'));
