import * as React from "react";
import { CartItem as CartItemType } from "../../types";
import Arrow from "../../images/arrow.png";
import { connect } from "react-redux";

interface Props {
  item: CartItemType;
  dispatch: any;
}

const CartFeatured: React.FC<Props> = ({ item, dispatch }) => {
  const handleAddItem = () => {
    dispatch({
      type: "ADD_ITEM",
      item,
    });
  };

  return (
    <div className="cartItemFeatured">
      <div className="cartItemFeatured--title">{item.title}</div>
      <div className="cartItemFeatured--main">
        <img
          src={item.image}
          alt={item.title}
          className="cartItemFeatured--image"
        />
        <div>
          <p className="cartItemFeatured--description">{item.description}</p>
          <div className="cartItemFeatured--prices">
            <div className="cartItemFeatured--price">
              ${item.price.toFixed(2)}
            </div>
            <div className="cartItemFeatured--price-discount">
              ${item.discountPrice?.toFixed(2)}
            </div>
          </div>
          <button className="cartItemFeatured--btn" onClick={handleAddItem}>
            <span>Add now</span>
            <img src={Arrow} alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(CartFeatured);
