import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import lib from './scripts/index';

const { hello } = lib;

hello();

ReactDOM.render(<App />, document.querySelector('#root'));
