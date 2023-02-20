import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const editorSizeSlice = createSlice({
  name: "editorSize",
  initialState,
  reducers: {
    setEditorSize: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setEditorSize } = editorSizeSlice.actions;
export const editorSizeReducer = editorSizeSlice.reducer;
