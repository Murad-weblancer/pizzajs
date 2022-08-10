import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryId: 0,
    searchValue: "",
    page: 1,
  },
  reducers: {
    getCategory(state, action) {
      state.categoryId = action.payload;
    },
    getSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    getPage(state, action) {
      state.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getCategory, getSearchValue, getPage } = filterSlice.actions;

export default filterSlice.reducer;
