import { createStore, compose } from 'redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { install, StoreCreator } from 'redux-loop';
import { initialState, reducer } from './reducers';

import { CounterContainer } from './components/counter';

const enhancedCreateStore = createStore as StoreCreator;

let enhancer = compose(install());

if (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancer = compose(
    install(),
    window.__REDUX_DEVTOOLS_EXTENSION__({
      serialize: {
        options: true,
      },
    })
  );
}

const store = enhancedCreateStore(reducer, initialState, enhancer);

const Root: React.SFC<{}> = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

window.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root />, rootEl);
});
