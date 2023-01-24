import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/auth-slice";
import contactsReducer from "./contacts/contacts-slice";

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ["token"]
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  contacts: contactsReducer,
})

export default rootReducer;
