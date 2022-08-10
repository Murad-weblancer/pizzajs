import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
  },
  reducers: {
    addProducts(state, action) {
      const findProducts = state.products.find(
        (obj) => obj.id === action.payload.id
      );
      if (findProducts) {
        findProducts.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.products.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
    },
    increment(state, action) {
      const findProducts = state.products.find(
        (obj) => obj.id === action.payload
      );
      if (findProducts) {
        findProducts.count++;
      }
      state.totalPrice = state.products.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
    },
    decrimet(state, action) {
      const findProducts = state.products.find(
        (obj) => obj.id === action.payload
      );
      if (findProducts) {
        findProducts.count--;
      }
      state.totalPrice = state.products.reduce(
        (sum, obj) => obj.price * obj.count - sum,
        0
      );
    },
    removeProducts(state, action) {
      state.products = state.products.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = state.products.reduce(
        (sum, obj) => obj.price * obj.count - sum,
        0
      );
    },
    clearProducts(state) {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProducts,
  removeProducts,
  clearProducts,
  increment,
  decrimet,
} = cartSlice.actions;

export default cartSlice.reducer;
