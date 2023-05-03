import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  getContacts,
  deleteContact,
} from '../services/contactsAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectedValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const res = await addContact(data);
      return res;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectedValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const deletedId = await deleteContact(id);
      return deletedId;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectedValue(error.message);
    }
  }
);
