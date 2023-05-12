import { createSlice } from '@reduxjs/toolkit';
import {
  userLoginThunk,
  userProfileThunk,
  userSignupThunk,
} from './operations';

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

const handleFulfilledLogin = (state, { payload }) => {
  console.log(payload);
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
  state.error = null;
  state.isLoggedIn = true;
};

const handleFulfilledUserProfile = (state, { payload }) => {
  console.log(payload);
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
      .addCase(userSignupThunk.rejected, handleRejected)
      .addCase(userLoginThunk.pending, handlePending)
      .addCase(userLoginThunk.fulfilled, handleFulfilledLogin)
      .addCase(userLoginThunk.rejected, handleRejected)
      .addCase(userProfileThunk.pending, handlePending)
      .addCase(userProfileThunk.fulfilled, handleFulfilledUserProfile)
      .addCase(userProfileThunk.rejected, handleRejected);
    //  .addMatcher(isAnyOf(...allThunks('rejected')), handleRejected);
  },
  // const arrThunks = [registerUser, addContactThunk, deleteContactThunk];
  // const allThunks = type => arrThunks.map(thunk => thunk[type]);
});

export const authReducer = authSlice.reducer;
