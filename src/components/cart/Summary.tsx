import { Link } from "gatsby";
import * as React from "react";

interface Props {
  hideLink?: boolean;
}

const CartSummary: React.FC<Props> = ({ hideLink }) => {
  return (
    <div className="cartSummary">
      <div className="cartSummary--rows">
        <div className="cartSummary--row">
          <div className="cartSummary--row-title">Subtotal</div>
          <div className="cartSummary--row-value">$368.00</div>
        </div>
        <div className="cartSummary--row">
          <div className="cartSummary--row-title">Shipping</div>
          <div className="cartSummary--row-value">calculated next step</div>
        </div>
        <div className="cartSummary--row">
          <div className="cartSummary--row-title">Discounts</div>
          <div className="cartSummary--row-value">-$22.15</div>
        </div>
        <div className="cartSummary--row cartSummary--row_bold">
          <div className="cartSummary--row-title">Total</div>
          <div className="cartSummary--row-value">
            <span>AUD</span> $368.00
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

export default CartSummary;
