import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = textSlice.actions;
export const textReducer = textSlice.reducer;
