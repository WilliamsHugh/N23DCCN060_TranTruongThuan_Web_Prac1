export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          MyStore
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Shop</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-gray-900 transition-colors text-lg relative">
            Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}