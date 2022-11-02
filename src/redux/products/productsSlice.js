import { createSlice } from "@reduxjs/toolkit/dist";

const productsSlice = createSlice({
    name: "products",
    initialState: {
      typeOfTesting: "",
      questionsForUser: [],
      isLoading: false,
      error: null,
      userAnswer: [],
      rightAnswers: null,
    },
    reducers: {
      
    },
    extraReducers: {     
    },
  });
  
  
  export default productsSlice.reducer;