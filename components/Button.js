export default function Button({ children, variant = "primary" }) {
  const styles = variant === "primary"
    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
    : "border border-gray-300 text-gray-700 hover:bg-gray-50";
  return (
    <button className={`${styles} px-5 py-2.5 rounded-lg text-sm font-medium transition-colors`}>
      {children}
    </button>
  );
}