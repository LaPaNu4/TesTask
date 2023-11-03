import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: null,
  isLoading: false,
  error: null,
};

const favSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) =>
    builder
});

export const favReducer = favSlice.reducer;