import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import store from './store/store';
import App from './App';

const Launcher = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={App} />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<Launcher />, document.querySelector('#root'));
