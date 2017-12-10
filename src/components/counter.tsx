import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveCount, loadCount, incrementCounter, Action } from '../actions/';
import { All } from '../reducers/';

interface StateProps {
  counter: number;
  isLoading: boolean;
  isSaving: boolean;
  error: Error | undefined;
}

interface DispatchProps {
  loadCount: () => Action;
  saveCount: (value: number) => Action;
  incrementCounter: (value: number) => Action;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

class CounterContainerComponent extends React.Component<Props, {}> {
  saveCount = () => {
    this.props.saveCount(this.props.counter);
  };

  increment = () => {
    this.props.incrementCounter(1);
  };

  render() {
    return (
      <div>
        <div className="hero">
          <strong>{this.props.counter}</strong>
        </div>
        <form>
          <button onClick={this.increment}>click me!</button>
          <button disabled={this.props.isSaving} onClick={this.saveCount}>
            {this.props.isSaving ? 'saving...' : 'save'}
          </button>
          <button
            disabled={this.props.isLoading}
            onClick={this.props.loadCount}
          >
            {this.props.isLoading ? 'loading...' : 'load'}
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state: All): StateProps {
  return {
    counter: state.counter,
    isLoading: state.isLoading,
    isSaving: state.isSaving,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch: Dispatch<All>): DispatchProps {
  return bindActionCreators(
    {
      loadCount: loadCount,
      saveCount: saveCount,
      incrementCounter: incrementCounter,
    },
    dispatch
  );
}

export const CounterContainer = connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainerComponent);
