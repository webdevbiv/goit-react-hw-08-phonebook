import { createSlice } from '@reduxjs/toolkit';
import { userLogoutThunk, userLoginThunk, userSignupThunk } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const handlePending = (state, _) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.error = null;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
};

const handleFulfilledUserProfile = (_, { payload }) => {
  console.log(payload);
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

//SECTION - addCase section
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userLoginThunk.fulfilled, handleFulfilledLogin)
      .addCase(userLoginThunk.pending, handlePending)
      .addCase(userLoginThunk.rejected, handleRejected)
      .addCase(userLogoutThunk.fulfilled, handleFulfilledUserProfile)
      .addCase(userLogoutThunk.pending, handlePending)
      .addCase(userLogoutThunk.rejected, handleRejected)
      .addCase(userSignupThunk.fulfilled, handleFulfilled)
      .addCase(userSignupThunk.pending, handlePending)
      .addCase(userSignupThunk.rejected, handleRejected);
    // .addCase(userProfileThunk.fulfilled, handleFulfilledUserProfile)
    // .addCase(userProfileThunk.pending, handlePending)
    // .addCase(userProfileThunk.rejected, handleRejected)
    //TODO - create addMatcher
    //  .addMatcher(isAnyOf(...allThunks('rejected')), handleRejected);
  },
  // const arrThunks = [registerUser, addContactThunk, deleteContactThunk];
  // const allThunks = type => arrThunks.map(thunk => thunk[type]);
});

export const authReducer = authSlice.reducer;
