import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await API.addContact(data);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const dublicate = contacts.items.find(item => item.name.toLowerCase() === data.name.toLowerCase());
      if (dublicate) {
        alert(`${data.name} is already in contacts!`);
        return false;
      }
      return data;
    },
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const { id: deleteId } = await API.deleteContact(id);
      return deleteId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
