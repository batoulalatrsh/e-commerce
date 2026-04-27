import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cart";
export default function useCart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleAddToCart(product, size, quantity) {
    dispatch(
      addItem({
        id: product?.id,
        image: product?.images[0],
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
  };
}
