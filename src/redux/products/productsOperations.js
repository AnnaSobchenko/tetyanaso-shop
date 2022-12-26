import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArtsApi } from "../../fetchApi";

export const getArts = createAsyncThunk("arts/get", async (_, thunkApi) => {
  try {
    const data = await getArtsApi();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
