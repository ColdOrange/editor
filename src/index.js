// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

import App from './app';
import './index.css';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('need root dom with id "root"');
}

ReactDOM.render(<App />, root);
