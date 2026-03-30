export default function Button({ children, variant = "primary" }) {
  const styles = variant === "primary"
    ? "bg-gray-900 hover:bg-gray-700 text-white border border-gray-900"
    : "bg-white border border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white";
  return (
    <button className={`${styles} w-full px-4 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-md transition-all duration-200`}>
      {children}
    </button>
  );
}