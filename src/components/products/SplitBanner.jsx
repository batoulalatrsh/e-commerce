import BammerItem from "./BannerItem";
import collection1 from "../../../public/col1.jpg";
import collection2 from "../../../public/col2.jpg";

export default function SplitBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-9 h-[500px] md:h-[600px]">
      <BammerItem path="products/womans" imgSrc={collection1} />
      <BammerItem path="products/men" imgSrc={collection2} />
    </section>
  );
}
