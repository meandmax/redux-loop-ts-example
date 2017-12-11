import { LoopReducer, Cmd, loop, Loop } from 'redux-loop';
import * as actions from '../actions';
import { api } from '../api';

export type All = {
  counter: number;
  isSaving: boolean;
  isLoading: boolean;
  error: Error | undefined;
};

export const initialState: All = {
  counter: 0,
  isSaving: false,
  isLoading: false,
  error: undefined,
};

export const reducer: LoopReducer<All, actions.Action> = (
  state: All = initialState,
  action: actions.Action
): All | Loop<All, actions.Action> => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { ...state, counter: state.counter + 1 };
    case 'RESET_COUNTER':
      return { ...state, counter: 0 };
    case 'LOAD_COUNT':
      return loop(
        { ...state, isLoading: true },
        Cmd.run(api.load, {
          successActionCreator: actions.loadCountSuccess,
          failActionCreator: actions.loadCountError,
        })
      );
    case 'LOAD_COUNT_SUCCESS':
      return { ...state, isLoading: false, counter: action.value };
    case 'LOAD_COUNT_ERROR':
      return { ...state, error: action.error, isLoading: false };
    case 'SAVE_COUNT':
      return loop(
        { ...state, isSaving: true },
        Cmd.run(api.save, {
          successActionCreator: actions.saveCountSuccess,
          failActionCreator: actions.saveCountError,
          args: [action.value],
        })
      );
    case 'SAVE_COUNT_SUCCESS':
      return { ...state, isSaving: false };
    case 'SAVE_COUNT_ERROR':
      return { ...state, error: action.error, isSaving: false };
    default:
      return state;
  }
};
