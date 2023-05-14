import { createSlice } from '@reduxjs/toolkit';
import {
  userLogoutThunk,
  userLoginThunk,
  userSignupThunk,
  userRefreshThunk,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  imageIsLoading: true,
};

const handleFulfilledUserSignup = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
};

const handleFulfilledUserLogin = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
};

const handleFulfilledUserLogout = (state, _) => {
  state.error = null;
  state.isLoading = false;
  state.isLoggedIn = false;
  state.token = null;
  state.user = { name: null, email: null };
};

const handleFulfilledUserRefreshThunk = (state, { payload }) => {
  console.log('refreshing success');
  state.error = null;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.user = payload;
};

const handlePending = (state, _) => {
  state.isLoading = true;
  state.isRefreshing = true;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
  state.isRefreshing = false;
};

//SECTION - addCase section
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userLoginThunk.fulfilled, handleFulfilledUserLogin)
      .addCase(userLoginThunk.pending, handlePending)
      .addCase(userLoginThunk.rejected, handleRejected)
      .addCase(userLogoutThunk.fulfilled, handleFulfilledUserLogout)
      .addCase(userLogoutThunk.pending, handlePending)
      .addCase(userLogoutThunk.rejected, handleRejected)
      .addCase(userSignupThunk.fulfilled, handleFulfilledUserSignup)
      .addCase(userSignupThunk.pending, handlePending)
      .addCase(userSignupThunk.rejected, handleRejected)
      .addCase(userRefreshThunk.fulfilled, handleFulfilledUserRefreshThunk)
      .addCase(userRefreshThunk.pending, handlePending)
      .addCase(userRefreshThunk.rejected, handleRejected);
    //TODO - create addMatcher
    //  .addMatcher(isAnyOf(...allThunks('rejected')), handleRejected);
  },
  // const arrThunks = [registerUser, addContactThunk, deleteContactThunk];
  // const allThunks = type => arrThunks.map(thunk => thunk[type]);
});

export const authReducer = authSlice.reducer;

export const { setImageIsLoading } = authSlice.actions;
