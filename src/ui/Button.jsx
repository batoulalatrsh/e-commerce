export default function Button({ text }) {
  return (
    <button className="border border-black px-2 py-1 md:px-6 md:py-3 text-xs md:text-sm hover:bg-black cursor-pointer hover:text-white transition duration-300">
      {text}
    </button>
  );
}
