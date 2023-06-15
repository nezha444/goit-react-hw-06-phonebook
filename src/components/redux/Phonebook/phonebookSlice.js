import { createSlice } from '@reduxjs/toolkit';
import { phonebookState } from './phonebookState';

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { setContacts, setFilter } = phonebookSlice.actions;
