import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/";
import CartIcon from "../icons/cart.svg";
import { useGlobalState } from "../data/cart";

const IndexPage: React.FC<PageProps> = () => {
  const [state, setState] = useGlobalState();

  return (
    <Layout className="homePage">
      <button
        className="cartModalBtn"
        onClick={() => {
          setState({
            ...state,
            showCartModal: true,
          });
        }}
      >
        <span>Your cart</span>
        <CartIcon />
      </button>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
