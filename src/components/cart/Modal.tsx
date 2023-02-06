import * as React from "react";
import { CartPromoCode, CartSummary } from ".";
import Image1 from "../../images/cat-street-creme_2000.webp";
import Image2 from "../../images/cat-street-olive_2000.webp";
import { CartItem as CartItemType } from "../../types";
import CartItem from "./Item";

const CartModal: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItemType[]>([
    {
      title: "Bouclé Bungalow “Creme” Cover",
      price: 239,
      quantity: 1,
      image: Image1,
    },
    {
      title: "Replacement Cover in “Catnip”",
      price: 129,
      quantity: 2,
      image: Image2,
    },
  ]);

  return true ? (
    <div className="cartModal">
      <div className="cartModal--main">
        <div className="cartModal--top">
          <button className="cartModal--close" aria-label="Close cart modal">
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
            </div>
            <CartSummary />
          </>
        ) : (
          <div className="cartModal--empty">
            There’s nothing for your poor cat in your cart!
          </div>
        )}
      </div>
      <div className="cartModal--overlay" />
    </div>
  ) : (
    <></>
  );
};

export default CartModal;
