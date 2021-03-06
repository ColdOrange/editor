// @flow

import * as React from 'react';

import Title from './componments/title';
import Tools from './componments/tools';
import Paper from './componments/paper';
import './app.css';

class App extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <Title title="无标题" />
        <Tools />
        <Paper />
      </React.Fragment>
    );
  }
}

export default App;
