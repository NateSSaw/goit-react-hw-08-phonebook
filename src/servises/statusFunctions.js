import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from '../components/redux/contacts/thunk';

const thunksArr = [addContactThunk, deleteContactThunk, getContactsThunk];

export const typeRequest = type => thunksArr.map(el => el[type]);

export const handlePending = state => (state.isLoading = true);

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

export const handleFulfilledGet = (state, { payload }) => {
  state.contacts = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.contacts.push(payload);
};

export const handleFulfilledDel = (state, { payload }) => {
  state.contacts = state.contacts.filter(el => el.id !== payload.id);
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
