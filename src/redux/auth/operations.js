import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const publicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const privateInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  console.log('token added to headers');
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
  async (_, { rejectWithValue }) => {
    try {
      console.log(axios.defaults.headers.common['Authorization']);
      await axios.post('/users/logout');

      clearAuthHeader();
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
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
      const { data } = await privateInstance.get('/users/current');
      console.log(`userRefreshThunk success`);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
