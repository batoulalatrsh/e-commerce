import { Link } from "react-router-dom";
export default function Button({ text, path }) {
  return (
    <Link
      to={path}
      className="border border-black px-2 py-1 md:px-6 md:py-3 text-xs md:text-sm hover:bg-black cursor-pointer hover:text-white transition duration-300"
    >
      {text}
    </Link>
  );
}
