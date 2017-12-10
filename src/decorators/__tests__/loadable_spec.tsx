import * as React from 'react';
import { renderComponentShallow } from '../../test-helpers';
import loadable from '../loadable';

interface Props {
  isLoading: boolean;
}

const TestComponent = () => <div>OK</div>;
const LoadableTestComponent = loadable<Props>(props => props.isLoading)(
  TestComponent
);

describe('decorators/loadable', () => {
  it('sets friendly .displayName', () => {
    expect(LoadableTestComponent.displayName).toEqual(
      'Loadable(TestComponent)'
    );
  });

  it('maps props to loading', () => {
    expect(
      renderComponentShallow(<LoadableTestComponent isLoading={true} />)
    ).toMatchSnapshot();
  });
});
