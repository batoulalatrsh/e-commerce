import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cart";
export default function useCart(productId = null) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const isInCart = productId
    ? items.find((item) => item.id === productId)
    : null;

  function handleAddToCart(product, image, size, quantity) {
    dispatch(
      addItem({
        id: product?.id,
        image: image,
        title: product?.title,
        price: product?.price,
        stock: product?.stock,
        category: product?.category,
        size,
        quantity,
      }),
    );
  }

  function handleRemoveItem(product) {
    dispatch(removeItem(product));
  }
  return {
    items,
    handleAddToCart,
    handleRemoveItem,
    isInCart,
  };
}
