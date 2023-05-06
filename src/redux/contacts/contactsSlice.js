import { createSlice } from '@reduxjs/toolkit';
import logOut from '../auth/operations';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getContactsThunk.pending]: handlePending,
    [addContactThunk.pending]: handlePending,
    [deleteContactThunk.pending]: handlePending,
    [getContactsThunk.rejected]: handleRejected,
    [addContactThunk.rejected]: handleRejected,
    [deleteContactThunk.rejected]: handleRejected,
    [getContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [logOut.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
