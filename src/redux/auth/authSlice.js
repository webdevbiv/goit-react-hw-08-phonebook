import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userLoginThunk.fulfilled, handleFulfilledUserLogin)
      .addCase(userLogoutThunk.fulfilled, handleFulfilledUserLogout)
      .addCase(userSignupThunk.fulfilled, handleFulfilledUserSignup)
      .addCase(userRefreshThunk.fulfilled, handleFulfilledUserRefreshThunk)
      .addMatcher(
        isAnyOf(
          userLoginThunk.pending,
          userLogoutThunk.pending,
          userSignupThunk.pending,
          userRefreshThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          userLoginThunk.rejected,
          userLogoutThunk.rejected,
          userSignupThunk.rejected,
          userRefreshThunk.rejected
        ),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;

export const { setImageIsLoading } = authSlice.actions;
