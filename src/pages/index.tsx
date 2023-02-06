import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import CartIcon from "../icons/cart.svg";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout className="homePage">
      <button className="cartModalBtn">
        <span>Your cart</span>
        <CartIcon />
      </button>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
