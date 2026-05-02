import { Link } from "react-router";
import factory from '../../public/factory.jpg'
export default function AboutPage() {
  return (
    <section className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          AURUM STUDIO
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Redefining modern luxury through timeless design, precision
          craftsmanship, and a commitment to elegance in every detail.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={factory}
            alt="Aurum Studio"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AURUM STUDIO was founded with a vision to elevate everyday fashion
            into a refined luxury experience. Each collection is thoughtfully
            designed to blend contemporary aesthetics with timeless elegance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe luxury is not just about appearance — it's about how it
            makes you feel. Confident. Effortless. Unforgettable.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Our Values</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Built on principles that define true luxury and lasting quality.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Craftsmanship",
              desc: "Every piece is designed with attention to detail and premium materials.",
            },
            {
              title: "Timeless Design",
              desc: "We create collections that transcend trends and seasons.",
            },
            {
              title: "Sustainability",
              desc: "Committed to responsible production and ethical sourcing.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          Experience Luxury
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Discover collections crafted to elevate your everyday wardrobe.
        </p>
        <Link
          to="/products"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}
