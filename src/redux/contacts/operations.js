import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const privateInstance = token =>
  axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
    headers: { Authorization: `Bearer ${token}` },
  });

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getAllContactsThunk = createAsyncThunk(
  'contacts/getall',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (token === null) {
      return rejectWithValue('Unable to get contacts');
    }
    try {
      setAuthHeader(token);
      const { data } = await privateInstance(token).get('/contacts');
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const createContactThunk = createAsyncThunk(
  'contacts/create',
  async (newContact, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (token === null) {
      return rejectWithValue('Unable to delete contact no token');
    }
    try {
      setAuthHeader(token);
      const { data } = await privateInstance(token).post(
        `/contacts`,
        newContact
      );
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (token === null) {
      return rejectWithValue('Unable to delete contact no token');
    }
    try {
      setAuthHeader(token);
      const { data } = await privateInstance(token).delete(
        `/contacts/${contactId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateContactThunk = createAsyncThunk(
  'contacts/update',
  async ({ id, newContact }, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (token === null) {
      return rejectWithValue('Unable to delete contact no token');
    }
    try {
      setAuthHeader(token);
      const { data } = await privateInstance(token).patch(
        `/contacts/${id}`,
        newContact
      );
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);
