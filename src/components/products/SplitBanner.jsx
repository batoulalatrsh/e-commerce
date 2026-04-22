import BammerItem from "./BannerItem";

export default function SplitBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-9 h-[500px] md:h-[600px]">
      <BammerItem />
      <BammerItem />
    </section>
  );
}
