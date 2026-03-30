"use client";

import Button from "@/components/Button";

export default function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div
      className="h-full bg-white flex flex-col group cursor-pointer rounded-2xl overflow-hidden"
      style={{
        border: "1.5px solid #111827",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Ảnh */}
      <div
        className="relative flex items-center justify-center bg-white overflow-hidden"
        style={{ height: "260px" }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Nội dung */}
      <div className="flex flex-col items-center text-center px-4 pb-4 flex-1">
        <div className="w-full border-t border-gray-100 mb-3"></div>

        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h2 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 leading-snug">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`text-sm ${i < Math.round(product.rating?.rate || 0) ? "text-yellow-400" : "text-gray-200"}`}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.rating?.count})</span>
        </div>

        {/* Giá + nút */}
        <div className="mt-auto w-full flex flex-col items-center gap-3">
          <span className="text-lg font-bold text-green-600">${product.price}</span>
          <Button variant="outline">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}