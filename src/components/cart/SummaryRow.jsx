export default function SummaryRow({ label, value, highlight }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{label}</span>
      <span className={highlight ? "text-green-600 font-medium" : ""}>
        {value}
      </span>
    </div>
  );
}
