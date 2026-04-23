import ProductItem from "./ProductItem";
import Button from "../../ui/Button";
export default function Products({ title, description, bgColor, products }) {
  return (
    <section className={`${bgColor} px-4 md:px-10 py-12`}>
      <div className="flex items-end justify-between mb-10 py-2">
        <div>
          <span className="text-[11px] border border-gray-300 text-gray-600 px-2 py-1 tracking-wide">
            {description}
          </span>

          <h2 className="text-3xl md:text-5xl mt-3 font-light text-gray-900">
            {title}
          </h2>
        </div>

        <Button text="VIEW ALL →" />
      </div>

      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {products?.map((prod) => (
          <ProductItem key={prod?.id} data={prod} />
        ))}
      </div>
    </section>
  );
}
