import { configureStore } from "@reduxjs/toolkit";
import pizza from "./features/pizzaSlice";
import filter from "./features/filter";
import cart from "./features/cartSlice";


export default configureStore({
  reducer: {
    pizza,
    filter,
    cart
  },
});
