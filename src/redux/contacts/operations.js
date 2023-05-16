import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader } from 'redux/auth/operations';

export const getAllContactsThunk = createAsyncThunk(
  'contacts/getall',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    try {
      setAuthHeader(token);
      const { data } = await axios.get('/contacts');
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
    try {
      setAuthHeader(token);
      const { data } = await axios.post(`/contacts`, newContact);
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
    try {
      setAuthHeader(token);
      const { data } = await axios.delete(`/contacts/${contactId}`);
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
    try {
      setAuthHeader(token);
      const { data } = await axios.patch(`/contacts/${id}`, newContact);
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);
