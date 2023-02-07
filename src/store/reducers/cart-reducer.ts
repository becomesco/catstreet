import Image1 from "../../images/cat-street-creme_2000.webp";
import Image2 from "../../images/cat-street-olive_2000.webp";
import Image3 from "../../images/cat-street-hero-olive_2000.webp";
import { CartCoupon, CartItem, CartShipping } from "../../types";

const initialState = {
  isModalOpen: false,
  cartItems: [
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
  ] as CartItem[],
  coupons: [] as CartCoupon[],
  shippingMethod: {
    label: "Standard Shipping",
    value: 10,
  } as CartShipping,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    case "ADD_ITEM": {
      const itemIndex = state.cartItems.findIndex(
        (e) => e.title === action.item.title
      );

      if (itemIndex === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.item],
        };
      } else {
        const updatedItem = {
          ...state.cartItems[itemIndex],
          quantity: state.cartItems[itemIndex].quantity + 1,
        };
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            updatedItem,
            ...state.cartItems.slice(itemIndex + 1),
          ],
        };
      }
    }
    case "REMOVE_ITEM": {
      const removeIndex = state.cartItems.findIndex(
        (e) => e.title === action.item.title
      );

      if (removeIndex === -1) {
        return state;
      } else {
        const removedItem = state.cartItems[removeIndex];

        if (removedItem.quantity > 1) {
          const updatedRemovedItem = {
            ...removedItem,
            quantity: removedItem.quantity - 1,
          };
          return {
            ...state,
            cartItems: [
              ...state.cartItems.slice(0, removeIndex),
              updatedRemovedItem,
              ...state.cartItems.slice(removeIndex + 1),
            ],
          };
        } else {
          return {
            ...state,
            cartItems: [
              ...state.cartItems.slice(0, removeIndex),
              ...state.cartItems.slice(removeIndex + 1),
            ],
          };
        }
      }
    }
    case "ADD_COUPON": {
      return {
        ...state,
        coupons: [...state.coupons, action.coupon],
      };
    }
    case "REMOVE_COUPON": {
      const removeIndex = state.coupons.findIndex(
        (e) => e.code === action.coupon.code
      );

      if (removeIndex === -1) {
        return state;
      } else {
        return {
          ...state,
          coupons: [
            ...state.coupons.slice(0, removeIndex),
            ...state.coupons.slice(removeIndex + 1),
          ],
        };
      }
    }
    case "SET_SHIPPING": {
      return {
        ...state,
        shippingMethod: action.shippingMethod,
      };
    }
    default:
      return state;
  }
};

export const featuredItem: CartItem = {
  title: "Only For Cool Cats...",
  description: "Add the “Catnip” cover to your order and save 5%",
  price: 122.55,
  discountPrice: 129,
  quantity: 1,
  image: Image3,
};
