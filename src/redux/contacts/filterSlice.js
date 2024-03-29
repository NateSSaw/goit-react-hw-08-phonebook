import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
