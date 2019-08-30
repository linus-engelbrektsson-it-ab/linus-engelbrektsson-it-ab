import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';

export const run = () => {
  const existingContainer = document.querySelector('#app');
  const container = existingContainer || document.createElement('div');

  if (!existingContainer) {
    document.body.appendChild(container);
    container.id = 'app';
  }

  ReactDOM.render(<App />, container);
};
