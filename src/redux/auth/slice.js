import { createSlice } from '@reduxjs/toolkit';
import { userSignupThunk } from './thunk';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

const handlePending = (state, _) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = null;
  state.isLoading = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userSignupThunk.pending, handlePending)
      .addCase(userSignupThunk.fulfilled, handleFulfilled)
      .addCase(userSignupThunk.rejected, handleRejected);
    //  .addMatcher(isAnyOf(...allThunks('rejected')), handleRejected);
  },
  // const arrThunks = [registerUser, addContactThunk, deleteContactThunk];
  // const allThunks = type => arrThunks.map(thunk => thunk[type]);
});

export const authReducer = authSlice.reducer;
