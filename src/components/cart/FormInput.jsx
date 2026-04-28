export default function FormInput({ placeholder,name='' }) {
  // const name = placeholder.replaceAll(" ", "-");
  return (
    <input
      name={name}
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-black/40 transition duration-300"
      placeholder={placeholder}
    />
  );
}
