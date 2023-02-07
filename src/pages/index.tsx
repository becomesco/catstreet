import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/";
import CartIcon from "../icons/cart.svg";
import { connect } from "react-redux";

interface PageProps {
  dispatch: any;
}

const IndexPage: React.FC<PageProps> = ({ dispatch }) => {
  const handleOpenModal = () => {
    dispatch({
      type: "OPEN_MODAL",
    });
  };

  return (
    <Layout className="homePage">
      <button className="cartModalBtn" onClick={handleOpenModal}>
        <span>Your cart</span>
        <CartIcon />
      </button>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isModalOpen: state.isModalOpen,
  };
};

export default connect(mapStateToProps)(IndexPage);

export const Head: HeadFC = () => <title>Home Page</title>;
