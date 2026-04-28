export default function SubscribeSection() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-xs tracking-widest border border-gray-300 px-4 py-1 mb-6 text-gray-500">
          STAY CONNECTED
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Join the Inner Circle
        </h2>

        <p className="text-gray-500 mb-10 text-sm md:text-base">
          Be first to know about new arrivals, exclusive offers, and curated
          edits.
        </p>

       
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg sm:rounded-r-none outline-none focus:ring-1 focus:ring-gray-900 text-sm"
          />

          <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg sm:rounded-l-none text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
