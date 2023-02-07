import { createStore } from "redux";
import { cartReducer } from "./reducers/cart-reducer";

export const store = createStore(cartReducer);
