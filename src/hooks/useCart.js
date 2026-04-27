import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { addItem } from "../store/cart";
export default function useCart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [chosenSize, setChosenSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart(product, size, quantity) {
    dispatch(
      addItem({
        id: product?.id,
        image: product?.image,
        title: product?.title,
        price: product?.price,
        size,
        quantity,
      }),
    );
  }

  console.log(items);
  return {
    items,
    handleAddToCart,
    chosenSize,
    setChosenSize,
    setQuantity,
    quantity,
  };
}
