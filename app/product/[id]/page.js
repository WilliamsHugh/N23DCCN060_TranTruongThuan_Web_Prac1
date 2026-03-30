import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-red-500 mb-3">Không tìm thấy sản phẩm.</p>
          <a href="/" className="text-blue-600 hover:underline text-sm">← Quay lại</a>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-10">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8 flex items-center gap-2">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span>/</span>
          <span className="text-gray-700 font-medium line-clamp-1">{product.title}</span>
        </div>

        {/* Card chi tiết */}
        <div className="bg-white rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
        >
          <div className="flex flex-col md:flex-row">

            {/* Ảnh */}
            <div className="md:w-2/5 bg-gray-50 flex items-center justify-center p-12">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-72 w-full object-contain"
                style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))" }}
              />
            </div>

            {/* Thông tin */}
            <div className="md:w-3/5 p-10 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 leading-snug mb-4">
                  {product.title}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-400 text-base">
                    {"★".repeat(Math.round(product.rating?.rate || 0))}
                    <span className="text-gray-200">
                      {"★".repeat(5 - Math.round(product.rating?.rate || 0))}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating?.rate} · {product.rating?.count} reviews
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Giá + nút */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                    In Stock
                  </span>
                </div>
                <div className="flex gap-3 flex-wrap pt-4 border-t border-gray-100">
                    <Button variant="primary">Add to Cart</Button>
                    <Button variant="outline">Wishlist</Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="mt-20 bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © 2025 MyStore · All rights reserved
      </footer>
    </div>
  );
}