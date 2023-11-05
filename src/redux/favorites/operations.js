import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../cars/operations";

export const getCarById = createAsyncThunk(
  "cars/getCarById",
    async ({ id }, { rejectWithValue }) => {
        try {
            const url = `/api/adverts/adverts?id=${id}`;
            console.log(url);
          const responce = await instance.get(url);
          console.log(responce.data[0]);
          return responce.data[0];
      } catch (error) {
        return rejectWithValue(error.message);
      }
  }
);