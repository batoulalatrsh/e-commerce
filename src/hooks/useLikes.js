import { useSelector, useDispatch } from "react-redux";
import { liked, selectLikestItems, clearStorage } from "../store/Likes";

export default function useLikes(productId = null) {
  const likedItems = useSelector(selectLikestItems);
  const dispatch = useDispatch();

  const isLiked = productId
    ? likedItems.some((item) => item.id === productId)
    : false;

  function handleToggleLike(product, size = "M", quantity = 1) {
    dispatch(
      liked({
        id: product?.id,
        image: product?.images?.[0],
        title: product?.title,
        price: product?.price,
        size,
        quantity,
      }),
    );
  }
  return { handleToggleLike, likedItems, isLiked };
}
