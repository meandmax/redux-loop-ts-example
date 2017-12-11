import { reducer, All } from '../index';
import {
  loadCount,
  loadCountSuccess,
  loadCountError,
  resetCounter,
  saveCount,
  saveCountError,
  saveCountSuccess,
  incrementCounter,
} from '../../actions';
import { api } from '../../api';
import { Cmd, loop } from 'redux-loop';

describe('reducer', () => {
  let state: All;

  beforeEach(() => {
    state = {
      counter: 0,
      isSaving: false,
      isLoading: false,
      error: undefined,
    };
  });

  it('unknown action should return the initial state', () => {
    expect(reducer(undefined, { type: 'noOp' })).toEqual(state);
  });

  it('incrementCounter() should increment counter by 1', () => {
    expect(reducer(undefined, incrementCounter())).toEqual({
      ...state,
      counter: 1,
    });
  });

  it('resetCounter() should return the initial state', () => {
    expect(reducer({ ...state, counter: 5 }, resetCounter())).toEqual({
      ...state,
      counter: 0,
    });
  });

  describe('loadCount()', () => {
    it('returns an object which deeply equals the object returned by reducer', () => {
      const result = reducer(state, loadCount());

      expect(
        loop(
          { ...state, isLoading: true },
          Cmd.run(api.load, {
            successActionCreator: loadCountSuccess,
            failActionCreator: loadCountError,
          })
        )
      ).toEqual(result);
    });
  });

  describe('loadCount()', () => {
    it('returns an object which deeply equals the object returned by reducer', () => {
      const result = reducer(state, loadCount());

      expect(
        loop(
          { ...state, isLoading: true },
          Cmd.run(api.load, {
            successActionCreator: loadCountSuccess,
            failActionCreator: loadCountError,
          })
        )
      ).toEqual(result);
    });
  });

  describe('saveCount()', () => {
    it(' returns an object which deeply equals the object returned by reducer', () => {
      const result = reducer(state, saveCount(5));

      expect(
        loop(
          { ...state, isSaving: true },
          Cmd.run(api.save, {
            successActionCreator: saveCountSuccess,
            failActionCreator: saveCountError,
            args: [5],
          })
        )
      ).toEqual(result);
    });
  });
});
