import { createSlice } from "@reduxjs/toolkit/dist";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    arts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export default productsSlice.reducer;
