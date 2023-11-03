import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://65438b8101b5e279de208dab.mockapi.io",
});


export const getCarsThunk = createAsyncThunk(
  "cars/getCarsThunk",
    async (_, { rejectWithValue }) => {
      try {
          const response = await instance.post("/api/adverts/adverts");
          return response.data
      } catch (error) {
        return rejectWithValue(error.message);
      }
  }
);