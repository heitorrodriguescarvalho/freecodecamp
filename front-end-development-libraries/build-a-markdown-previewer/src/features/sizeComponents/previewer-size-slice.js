import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const previewerSizeSlice = createSlice({
  name: "previewerSize",
  initialState,
  reducers: {
    setPreviewerSize: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setPreviewerSize } = previewerSizeSlice.actions;
export const previewerSizeReducer = previewerSizeSlice.reducer;
