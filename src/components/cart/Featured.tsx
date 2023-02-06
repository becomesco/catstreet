import * as React from "react";
import { CartItem as CartItemType } from "../../types";

interface Props {
  item: CartItemType;
}

const CartFeatured: React.FC<Props> = ({ item }) => {
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
          <button className="cartItemFeatured--btn">Add now</button>
        </div>
      </div>
    </div>
  );
};

export default CartFeatured;
