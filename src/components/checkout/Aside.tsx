import * as React from "react";
import { featuredItem } from "../../store/reducers/cart-reducer";
import { CartItem, CartPromoCode, CartSummary } from "../cart";
import { connect } from "react-redux";
import CartFeatured from "../cart/Featured";
import { CartItem as CartItemType } from "../../types";

interface Props {
  cartItems: CartItemType[];
}

const CheckoutAside: React.FC<Props> = ({ cartItems }) => {
  return (
    <aside className="checkoutAside">
      <h2 className="checkoutAside--title">Your order</h2>
      <div className="checkoutAside--white">
        {cartItems.length > 0 ? (
          <>
            <div className="checkoutAside--items">
              {cartItems.map((item, index) => {
                return <CartItem item={item} key={index} />;
              })}
            </div>
            <CartPromoCode />
            <CartSummary hideLink />
          </>
        ) : (
          <div
            className="cartModal--empty"
            style={{
              marginBottom: "16px",
            }}
          >
            There’s nothing for your poor cat in your cart!
          </div>
        )}
      </div>
      <button className="cartSummary--btn">Pay now</button>
      <CartFeatured item={featuredItem} />
    </aside>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(CheckoutAside);
