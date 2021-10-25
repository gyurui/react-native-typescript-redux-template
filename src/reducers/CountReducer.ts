import {CountActionTypes} from '../actions/CountsAction';
import {AnyAction} from '@reduxjs/toolkit';

export interface CountState {
  count: number;
}

export const initialState: CountState = {
  count: 0,
};

export const countReducer = (
  state: CountState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case CountActionTypes.changeCounter:
      return {...state, count: action.count};
    default:
      return state;
  }
};
