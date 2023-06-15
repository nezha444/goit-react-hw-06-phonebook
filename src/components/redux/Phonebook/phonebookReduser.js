import { createReducer } from '@reduxjs/toolkit';
import { phonebookState } from './phonebookState';
import { setContacts, setFilter } from './actions';

export const phonebookReducer = createReducer(phonebookState, {
  [setContacts]: (state, action) => ({
    ...state,
    contacts: action.payload,
  }),
  [setFilter]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
});
