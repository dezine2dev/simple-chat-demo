import { createReducer, createActions } from 'reduxsauce';
import shortid from 'shortid';

/* --------------------- Types and Action Creators ---------------- */
const { Types, Creators } = createActions({
  setMsgs: ['msg']
});

export const AppTypes = Types;

export default Creators;

/* --------------------- Selectors ---------------- */
export const AppSelectors = {
  selectMsgs: state => state.app.msgs
};

/* --------------------- Initial State ----------------- */
export const INITIAL_STATE = {
  msgs: []
};

/* ------------------- Reducers --------------------- */
const setMsgs = (state, { msg }) => {
  const newMsg = {
    id: shortid.generate(),
    timestamp: Date.now(), // timestamp for future usage like sorting, fitlering
    msg
  };
  const extendedMsgs = [...state.msgs, newMsg];

  return {
    ...state,
    msgs: extendedMsgs
  };
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_MSGS]: setMsgs
});
