import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/auth";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    }
    catch (error) {
      if (error.response.status === 400) {
        alert(`This email is already taken!`)
      }
      return rejectWithValue(error);
    }
  }
)

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch (error) {
      if (error.response.status === 400) {
        alert(`You entered the wrong email or password!`)
      }
      return rejectWithValue(error);
    }
  }
)

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

export const getCurrent = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    }
  }
)
