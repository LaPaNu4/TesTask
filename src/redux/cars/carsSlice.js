import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./operations";


const initialState = {
  cars: null,
  isLoading: false,
  error: null,
};


const carsSlice = createSlice({
  name: "cars",
  initialState,
    extraReducers: (builder) =>
        builder
            .addCase(getCarsThunk.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCarsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getCarsThunk.fulfilled, (state, action) => { 
                state.isLoading = false;
                state.error = null;
                state.cars = action.payload
            })
});

export const carsReducer = carsSlice.reducer;