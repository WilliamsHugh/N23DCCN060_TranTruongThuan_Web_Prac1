export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          MyStore
        </a>
        <div className="space-x-6 hidden md:flex items-center text-sm text-gray-600">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Products</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Cart (0)
        </button>
      </div>
    </nav>
  );
}