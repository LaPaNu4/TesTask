import { createSlice } from "@reduxjs/toolkit";
import { getCarById } from "./operations";

const initialState = {
  favCars: [],
  isLoading: false,
  error: null,
};

const favSlice = createSlice({
  name: "favCars",
  initialState,
  reducers: {
    removeCarFromFavorites: (state, action) => {
      state.favCars = state.favCars.filter((car) => car.id !== action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        if (Array.isArray(state.favCars)) {
          // Перевіряємо, чи об'єкт з таким id вже існує у масиві
          if (!state.favCars.some((car) => car.id === payload.id)) {
            state.favCars.push(payload);
          }
        } else {
          state.favCars = [payload];
        }
      }),
});

export const { removeCarFromFavorites } = favSlice.actions;
export const favReducer = favSlice.reducer;
