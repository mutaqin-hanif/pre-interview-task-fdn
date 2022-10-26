import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    editorChoice: [],
    article: [],
    review: [],
  },
  reducers: {
    getData: (state, action) => {
      state.editorChoice = action.payload["editor's choice"];
      state.article = action.payload["latest articles"];
      state.review = action.payload["latest review"].reduce((acc, item, i) => {
        const chunkIndex = Math.floor(i / 2);

        if (!acc[chunkIndex]) {
          acc[chunkIndex] = [];
        }
        acc[chunkIndex].push(item);
        return acc;
      }, []);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getData } = dataSlice.actions;

export default dataSlice.reducer;
