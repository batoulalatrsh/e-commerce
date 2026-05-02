export default function FormInput({ placeholder, name = "", error }) {
  return (
    <div className="w-full">
      <input
        name={name}
        className={
          "w-full border p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-black/40 transition duration-300 border-gray-300"
        }
        placeholder={placeholder}
      />

      <p className="text-red-500 text-sm mt-1 min-h-[18px]">{error || ""}</p>
    </div>
  );
}
