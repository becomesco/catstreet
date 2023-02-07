import { Link } from "gatsby";
import * as React from "react";
import { connect } from "react-redux";
import { CartCoupon, CartItem, CartShipping } from "../../types";

interface Props {
  hideLink?: boolean;
  cartItems: CartItem[];
  coupons: CartCoupon[];
  shippingMethod: CartShipping;
}

const CartSummary: React.FC<Props> = ({
  hideLink,
  cartItems,
  coupons,
  shippingMethod,
}) => {
  const subTotal = cartItems.reduce((acc, e) => {
    acc += e.quantity * e.price;
    return acc;
  }, 0);

  const discounts = coupons.reduce((acc, e) => {
    acc += e.discount;
    return acc;
  }, 0);

  return (
    <div className="cartSummary">
      <div className="cartSummary--rows">
        <div className="cartSummary--row">
          <div className="cartSummary--row-title">Subtotal</div>
          <div className="cartSummary--row-value">${subTotal.toFixed(2)}</div>
        </div>
        <div className="cartSummary--row">
          <div className="cartSummary--row-title">Shipping</div>
          <div className="cartSummary--row-value">
            {hideLink
              ? `+$${shippingMethod.value.toFixed(2)}`
              : "calculated next step"}
          </div>
        </div>
        <div className="cartSummary--row">
          <div className="cartSummary--row-title">Discounts</div>
          <div className="cartSummary--row-value">-${discounts.toFixed(2)}</div>
        </div>
        <div className="cartSummary--row cartSummary--row_bold">
          <div className="cartSummary--row-title">Total</div>
          <div className="cartSummary--row-value">
            <span>AUD</span> $
            {(
              subTotal +
              (hideLink ? shippingMethod.value : 0) -
              discounts
            ).toFixed(2)}
          </div>
        </div>
      </div>
      {!hideLink && (
        <Link to="/checkout" className="cartSummary--btn">
          Checkout now
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cartItems: state.cartItems,
    coupons: state.coupons,
    shippingMethod: state.shippingMethod,
  };
};

export default connect(mapStateToProps)(CartSummary);
