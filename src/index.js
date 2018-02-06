// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('need root dom with id "root"');
}

ReactDOM.render(<App />, root);
