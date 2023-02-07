import * as React from "react";
import { CartItem as CartItemType } from "../../types";
import { connect } from "react-redux";

interface Props {
  item: CartItemType;
  dispatch: any;
}

const CartItem: React.FC<Props> = ({ item, dispatch }) => {
  const handleRemoveItem = () => {
    if (item.quantity === 1) {
      const result = confirm(
        "Are you sure you want to remove this product from cart?"
      );

      if (result) {
        dispatch({
          type: "REMOVE_ITEM",
          item,
        });
      }
    } else {
      dispatch({
        type: "REMOVE_ITEM",
        item,
      });
    }
  };

  const handleAddItem = () => {
    dispatch({
      type: "ADD_ITEM",
      item,
    });
  };

  return (
    <div className="cartItem">
      <img src={item.image} alt={item.title} className="cartItem--image" />
      <div className="cartItem--main">
        <div className="cartItem--title">{item.title}</div>
        <div className="cartItem--asd">
          <div className="cartItem--actions">
            <button
              className="cartItem--action"
              aria-label="Remove item"
              onClick={handleRemoveItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="2"
                fill="none"
              >
                <path fill="#000" d="M.402.047h11v1h-11z" />
              </svg>
            </button>
            <input
              type="number"
              value={item.quantity}
              disabled
              className="cartItem--input"
            />
            <button
              className="cartItem--action"
              aria-label="Add item"
              onClick={handleAddItem}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                fill="none"
              >
                <path
                  fill="#000"
                  d="M4.958 4.147V.527h-1.12v3.62H.218v1.14h3.62v3.6h1.12v-3.6h3.62v-1.14h-3.62Z"
                />
              </svg>
            </button>
          </div>
          <div className="cartItem--price">{item.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(CartItem);
