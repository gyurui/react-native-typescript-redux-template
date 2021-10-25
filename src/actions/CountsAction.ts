export enum CountActionTypes {
  changeCounter = 'CHANGE_COUNTER',
  increment = 'INCREMENT',
  decrement = 'DECREMENT',
}

export interface ChangeCounter {
  type: CountActionTypes.changeCounter;
  count: number;
}

export function changeCount(count: number): ChangeCounter {
  return {
    type: CountActionTypes.changeCounter,
    count: count,
  };
}

export type CounterAction = ChangeCounter;
