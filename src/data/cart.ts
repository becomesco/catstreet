import { useState } from "react";
import { CartCoupon, CartItem } from "../types";
import Image1 from "../images/cat-street-creme_2000.webp";
import Image2 from "../images/cat-street-olive_2000.webp";
import Image3 from "../images/cat-street-hero-olive_2000.webp";

interface GlobalState {
  showCartModal: boolean;
}

export const useGlobalState = (): [
  GlobalState,
  (newState: GlobalState) => void
] => {
  const [state, setState] = useState({
    showCartModal: false,
  } as GlobalState);

  return [state, setState];
};

export const cart: {
  items: CartItem[];
  coupons: CartCoupon[];
} = {
  items: [
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
  ],
  coupons: [],
};

export const featuredItem: CartItem = {
  title: "Only For Cool Cats...",
  description: "Add the “Catnip” cover to your order and save 5%",
  price: 122.55,
  discountPrice: 129,
  quantity: 1,
  image: Image3,
};
