import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64484cb950c25337443cced2.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { initialState } from './initialState';
// import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';
// import {
//   handleFulfilled,
//   handleFulfilledAdd,
//   handleFulfilledDel,
//   handleFulfilledGet,
//   handlePending,
//   handleRejected,
//   typeRequest,
// } from '../../../servises/statusFunctions';

// export const contactSlice = createSlice({
//   name: 'contacs',
//   initialState,
//   reducers: {
//     addFilter: (state, action) => {
//       const value = action.payload;
//       state.filter = value;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
//       .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
//       .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
//       .addMatcher(isAnyOf(...typeRequest('pending')), handlePending)
//       .addMatcher(isAnyOf(...typeRequest('rejected')), handleRejected)
//       .addMatcher(isAnyOf(...typeRequest('fulfilled')), handleFulfilled);
//   },
// });

// export const { addFilter } = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;

// export const getContactsState = state => state.contacts.items;
// export const getFilterState = state => state.contacts.filter;
