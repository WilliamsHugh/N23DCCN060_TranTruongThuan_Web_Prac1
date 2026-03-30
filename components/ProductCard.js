export default function ProductCard({ product }) {
  return (
    <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Ảnh */}
      <div className="bg-gray-50 p-6 flex items-center justify-center" style={{ height: "200px" }}>
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full w-full object-contain"
        />
      </div>

      {/* Nội dung */}
      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-1">
          {product.category}
        </span>
        <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 flex-1 mb-3">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-xs text-gray-500">
            {product.rating?.rate} ({product.rating?.count})
          </span>
        </div>

        {/* Giá + nút */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}