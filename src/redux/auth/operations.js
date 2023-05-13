import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const publicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const privateInstance = token =>
  axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
    headers: { Authorization: `Bearer ${token}` },
  });

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const userSignupThunk = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await publicInstance.post('/users/signup', credentials);
      setAuthHeader(data.token);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLoginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await publicInstance.post('/users/login', credentials);
      setAuthHeader(data.token);
      console.log(`userLoginThunk success token: ${data.token}`);
      console.log('token added to headers');
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
//ANCHOR - logout
export const userLogoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      await privateInstance(token).post('/users/logout');
      console.log('userLogoutThunk success');
      clearAuthHeader();
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRefreshThunk = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    console.log(`userRefreshThunk token: ${state.auth.token}`);
    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(token);
      const { data } = await privateInstance(token).get('/users/current');
      console.log(`userRefreshThunk success`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
