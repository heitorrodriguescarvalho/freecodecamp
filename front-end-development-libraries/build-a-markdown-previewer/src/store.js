import { configureStore } from "@reduxjs/toolkit";

import { textReducer } from "./features/text/text-slice";
import { editorSizeReducer } from "./features/sizeComponents/editor-size-slice";
import { previewerSizeReducer } from "./features/sizeComponents/previewer-size-slice";

export const store = configureStore({
    reducer: {
        text: textReducer,
        editorSize: editorSizeReducer,
        previewerSize: previewerSizeReducer,
    },
});
