import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './app/root.js';
import { AppContainer } from 'react-hot-loader';
import style from './styles/importer.styl';

ReactDOM.render(
  <AppContainer>
    <RootComponent />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./app/root.js', () => {
    const NextRootComponent = require('./app/root.js');

    ReactDOM.render((
      <AppContainer>
        <NextRootComponent />
      </AppContainer>
    ), document.getElementById('app'));
  })
}