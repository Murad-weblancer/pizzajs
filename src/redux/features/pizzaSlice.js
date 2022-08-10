import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// omit imports and state

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (params) => {
    const { categoryId, searchValue, page } = params;
    const { data } = await axios.get(
      `https://626d16545267c14d5677d9c2.mockapi.io/items?${
        categoryId ? `category=${categoryId}` : ""
      }&search=${searchValue}&page=${page}&limit=4`
    );
    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    items: [],
    status: true,
  },
  reducers: {},
  extraReducers: {
    [fetchPizzas.pending](state) {
      state.status = true;
    },
    [fetchPizzas.fulfilled](state, action) {
      state.items = action.payload;
      state.status = false;
    },
    [fetchPizzas.rejected](state) {
      alert("Проблема с сервером");
      state.status = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
