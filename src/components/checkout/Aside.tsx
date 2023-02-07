import * as React from "react";
import { cart, featuredItem } from "../../data/cart";
import { CartItem, CartPromoCode, CartSummary } from "../cart";
import CartFeatured from "../cart/Featured";

const CheckoutAside: React.FC = () => {
  return (
    <aside className="checkoutAside">
      <h2 className="checkoutAside--title">Your order</h2>
      <div className="checkoutAside--white">
        <div className="checkoutAside--items">
          {cart.items.map((item, index) => {
            return <CartItem item={item} key={index} />;
          })}
        </div>
        <CartPromoCode />
        <CartSummary hideLink />
      </div>
      <button className="cartSummary--btn">Pay now</button>
      <CartFeatured item={featuredItem} />
    </aside>
  );
};

export default CheckoutAside;
