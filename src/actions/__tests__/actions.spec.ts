import * as actions from '../index';

describe('actions', () => {
  it('should create incrementCounter action', () => {
    const expectedAction = {
      type: actions.INCREMENT_COUNTER,
      value: 0,
    };
    expect(actions.incrementCounter(0)).toEqual(expectedAction);
  });

  it('should create loadCount action', () => {
    const expectedAction = {
      type: actions.LOAD_COUNT,
    };
    expect(actions.loadCount()).toEqual(expectedAction);
  });

  it('should create loadCountError action', () => {
    const expectedAction = {
      type: actions.LOAD_COUNT_ERROR,
      error: new Error('some error'),
    };
    expect(actions.loadCountError(new Error('some error'))).toEqual(
      expectedAction
    );
  });

  it('should create loadCountSuccess action', () => {
    const expectedAction = {
      type: actions.LOAD_COUNT_SUCCESS,
      value: 3,
    };
    expect(actions.loadCountSuccess(3)).toEqual(expectedAction);
  });

  it('should create saveCount action', () => {
    const expectedAction = {
      type: actions.SAVE_COUNT,
      value: 3,
    };
    expect(actions.saveCount(3)).toEqual(expectedAction);
  });

  it('should create saveCountError action', () => {
    const expectedAction = {
      type: actions.SAVE_COUNT_ERROR,
      error: new Error('some Error'),
    };
    expect(actions.saveCountError(new Error('some Error'))).toEqual(
      expectedAction
    );
  });

  it('should create saveCountSuccess action', () => {
    const expectedAction = {
      type: actions.SAVE_COUNT_SUCCESS,
    };
    expect(actions.saveCountSuccess()).toEqual(expectedAction);
  });
});
