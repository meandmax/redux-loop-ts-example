type E = { error: Error };

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const SAVE_COUNT = 'SAVE_COUNT';
export const SAVE_COUNT_SUCCESS = 'SAVE_COUNT_SUCCESS';
export const SAVE_COUNT_ERROR = 'SAVE_COUNT_ERROR';
export const LOAD_COUNT = 'LOAD_COUNT';
export const LOAD_COUNT_SUCCESS = 'LOAD_COUNT_SUCCESS';
export const LOAD_COUNT_ERROR = 'LOAD_COUNT_ERROR';

export type INCREMENT_COUNTER = typeof INCREMENT_COUNTER;
export type RESET_COUNTER = typeof RESET_COUNTER;
export type SAVE_COUNT = typeof SAVE_COUNT;
export type SAVE_COUNT_SUCCESS = typeof SAVE_COUNT_SUCCESS;
export type SAVE_COUNT_ERROR = typeof SAVE_COUNT_ERROR;
export type LOAD_COUNT = typeof LOAD_COUNT;
export type LOAD_COUNT_SUCCESS = typeof LOAD_COUNT_SUCCESS;
export type LOAD_COUNT_ERROR = typeof LOAD_COUNT_ERROR;

export type Action =
  // UI actions
  | { type: INCREMENT_COUNTER, value: number }
  | { type: RESET_COUNTER }

  // API Requests
  | { type: 'SAVE_COUNT', value: number }
  | { type: 'SAVE_COUNT_SUCCESS' }
  | { type: 'SAVE_COUNT_ERROR' } & E
  | { type: 'LOAD_COUNT' }
  | { type: 'LOAD_COUNT_SUCCESS', value: number }
  | { type: 'LOAD_COUNT_ERROR' } & E;

export const incrementCounter = (value: number): Action => ({
  type: INCREMENT_COUNTER,
  value,
});

export const resetCounter = (): Action => ({
  type: RESET_COUNTER,
});

export const saveCount = (value: number): Action => ({
  type: SAVE_COUNT,
  value,
});

export const saveCountSuccess = (): Action => ({
  type: SAVE_COUNT_SUCCESS,
});

export const saveCountError = (error: Error): Action => ({
  type: SAVE_COUNT_ERROR,
  error,
});

export const loadCount = (): Action => ({
  type: LOAD_COUNT,
});

export const loadCountSuccess = (value: number): Action => {
  return {
    type: LOAD_COUNT_SUCCESS,
    value,
  };
};

export const loadCountError = (error: Error): Action => {
  return {
    type: LOAD_COUNT_ERROR,
    error,
  };
};
