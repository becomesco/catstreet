import * as React from "react";
import { CartPromoCode, CartSummary } from ".";
import CartFeatured from "./Featured";
import CartItem from "./Item";
import { connect } from "react-redux";
import { featuredItem } from "../../store/reducers/cart-reducer";
import { CartItem as CartItemType } from "../../types";
import { gsap } from "gsap";

interface Props {
  isModalOpen: boolean;
  cartItems: CartItemType[];
  dispatch: any;
}

const CartModal: React.FC<Props> = ({ isModalOpen, dispatch, cartItems }) => {
  const handleCloseModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  React.useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        document.querySelectorAll(
          ".cartModal .cartItem, .cartModal .cartPromoCode, .cartModal .cartItemFeatured"
        ),
        {
          x: 20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          delay: 0.25,
        }
      );
    }
  }, [isModalOpen]);

  return (
    <div className={`cartModal ${isModalOpen ? "cartModal_visible" : ""}`}>
      <div className="cartModal--main">
        <div className="cartModal--top">
          <button
            className="cartModal--close"
            aria-label="Close cart modal"
            onClick={handleCloseModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              fill="none"
            >
              <path
                fill="#000"
                d="m16.1 15.51 6.699-6.806-1.193-1.211-6.699 6.806-6.7-6.806-1.192 1.211 6.7 6.806-6.7 6.806 1.193 1.212 6.699-6.806 6.7 6.806 1.192-1.212-6.7-6.806Z"
              />
            </svg>
          </button>
          <div className="cartModal--title">Your Cart</div>
        </div>
        {cartItems.length > 0 ? (
          <>
            <div className="cartModal--full">
              <div className="cartModal--items">
                {cartItems.map((item, index) => {
                  return <CartItem item={item} key={index} />;
                })}
              </div>
              <CartPromoCode />
              <CartFeatured item={featuredItem} />
            </div>
            <CartSummary />
          </>
        ) : (
          <div className="cartModal--empty">
            There’s nothing for your poor cat in your cart!
          </div>
        )}
      </div>
      <div className="cartModal--overlay" onClick={handleCloseModal} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isModalOpen: state.isModalOpen,
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(CartModal);
