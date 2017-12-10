import * as React from 'react';
import * as shallowRenderer from 'react-test-renderer/shallow';
import { All, initialState } from './reducers/index';
import { Provider } from 'react-redux';
import * as deepRenderer from 'react-test-renderer';
import { createStore, compose } from 'redux';
import { install, StoreCreator } from 'redux-loop';
import { reducer } from './reducers/index';

const enhancedCreateStore = createStore as StoreCreator;

const enhancer = compose(install());
const store = enhancedCreateStore(reducer, initialState, enhancer);
// tslint:disable-next-line no-any
type TestComponent = React.ReactElement<any>;

export function renderComponentShallow(component: TestComponent) {
  return shallowRenderer.createRenderer().render(component);
}

export function renderComponent(
  component: TestComponent,
  state: All = initialState
) {
  return deepRenderer.create(<Provider store={store}>{component}</Provider>);
}
