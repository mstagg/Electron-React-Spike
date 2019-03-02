import { INCREMENT_COUNTER } from '../actions/counter';

const electron = window.require('electron');
const { ipcRenderer } = electron;

const initialState = {
  counter: 0,
  error: null,
};

const handleIncrement = (state, payload) => {
  const newCounter = state.counter + payload;
  if (newCounter > 10) {
    return Object.assign({}, state, { error: 'Cannot count past 10!' });
  }
  if (newCounter < 0) {
    return Object.assign({}, state, { error: 'Cannot count below 0!' });
  }
  ipcRenderer.send('update-counter', newCounter);
  return Object.assign({}, state, { counter: newCounter, error: null });
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return handleIncrement(state, action.payload);
    default:
      return state;
  }
}
