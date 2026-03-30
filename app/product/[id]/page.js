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
        <main className="max-w-5xl mx-auto px-4 py-10">
          <p className="text-red-500">Không tìm thấy sản phẩm.</p>
          <a href="/" className="text-blue-600 hover:underline text-sm">← Quay lại</a>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium line-clamp-1">{product.title}</span>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Ảnh */}
            <div className="md:w-2/5 bg-gray-50 flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-72 w-full object-contain"
              />
            </div>

            {/* Thông tin */}
            <div className="md:w-3/5 p-8 flex flex-col">
              <span className="text-xs text-blue-600 font-medium uppercase tracking-wide mb-2">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(Math.round(product.rating?.rate || 0))}
                  {"☆".repeat(5 - Math.round(product.rating?.rate || 0))}
                </div>
                <span className="text-sm text-gray-500">
                  {product.rating?.rate} / 5 · {product.rating?.count} reviews
                </span>
              </div>

              {/* Giá */}
              <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4 inline-block w-fit">
                <span className="text-3xl font-bold text-blue-600">${product.price}</span>
              </div>

              {/* Mô tả */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                {product.description}
              </p>

              {/* Nút */}
              <div className="flex gap-3 flex-wrap pt-4 border-t border-gray-100">
                <Button variant="primary">Add to Cart</Button>
                <Button variant="outline">Wishlist</Button>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-white mt-16 py-6 text-center text-sm text-gray-400">
        © 2025 MyStore. All rights reserved.
      </footer>
    </div>
  );
}