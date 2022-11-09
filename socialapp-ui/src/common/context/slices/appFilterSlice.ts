import { createSlice } from "@reduxjs/toolkit";

const intialState = {};

export const appFilterSlice = createSlice({
  name: 'appFilter',
  initialState: intialState,
  reducers: {
  }
});

export const { } = appFilterSlice.actions;

export const appFilterReducer = appFilterSlice.reducer;