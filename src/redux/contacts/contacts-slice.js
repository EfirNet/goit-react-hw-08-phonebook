import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./contacts-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchContacts.pending]: (store, _) => ({ ...store, isLoading: true, error: null }),
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [addContact.pending]: (store, _) => ({ ...store, isLoading: true, error: null }),
    [addContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload)
    },
    [addContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [deleteContact.pending]: (store, _) => ({ ...store, isLoading: true, error: null }),
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  }
});

export default contactsSlice.reducer;
