import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../cars/operations";

export const getCarById = createAsyncThunk(
  "cars/getCarById",
  async ({ id }, { rejectWithValue }) => {
    try {
      const url = `/api/adverts/adverts?id=${id}`;
      const responce = await instance.get(url);
      return responce.data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
