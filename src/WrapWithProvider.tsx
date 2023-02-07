import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/cart";

const wrapWithProvider = ({ element }: any) => {
  return <Provider store={store}>{element}</Provider>;
};

export default wrapWithProvider;
