import LikedProductItem from "./LikedProductItem";
import NoItems from "./NoItems";
import Header from "./Header";
import useLikes from "../../hooks/useLikes";
import { useSelector } from "react-redux";
import { selectLikestItems } from "../../store/Likes";
export default function LikedProductsContent({}) {
  const likedItems = useSelector(selectLikestItems);
  console.log(likedItems);
  return (
    <section className="bg-white min-h-screen px-4 md:px-10 py-8">
      <Header />
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">
        {likedItems?.map((item) => (
          <LikedProductItem key={item.id} data={item} />
        ))}
      </div>

      {likedItems?.length == 0 && <NoItems text="Your wishlist is empty" path='/products'/>}
    </section>
  );
}
