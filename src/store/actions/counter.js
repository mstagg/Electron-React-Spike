export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(inc) {
  return {
    type: INCREMENT_COUNTER,
    payload: {
      inc
    }
  };
}