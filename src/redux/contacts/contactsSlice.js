import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
  updateContactThunk,
} from './operations';

const arrThunks = [
  createContactThunk,
  deleteContactThunk,
  getAllContactsThunk,
  updateContactThunk,
];
const allThunks = type => arrThunks.map(thunk => thunk[type]);

const handlePending = (state, _) => {
  state.isLoading = true;
};
const handleFulfilled = (state, _) => {
  state.isLoading = false;
  state.error = null;
};
const handleFulfilledGet = (state, { payload }) => {
  state.contacts = payload;
};
const handleFulfilledPost = (state, { payload }) => {
  state.contacts.push(payload);
};
const handleFulfilledDelete = (state, { payload }) => {
  const index = state.contacts.findIndex(contact => contact.id === payload.id);
  state.contacts.splice(index, 1);
};

const handleFulfilledUpdate = (state, { payload }) => {
  state.contacts = state.contacts.map(contact =>
    contact.id === payload.id ? payload : contact
  );
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(getAllContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactThunk.fulfilled, handleFulfilledPost)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addCase(updateContactThunk.fulfilled, handleFulfilledUpdate)
      .addMatcher(isAnyOf(...allThunks('pending')), handlePending)
      .addMatcher(isAnyOf(...allThunks('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...allThunks('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
