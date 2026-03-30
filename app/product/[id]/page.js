import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params; // ← thêm await vào đây
  const product = await getProduct(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 py-10">
          <p className="text-red-500">Không tìm thấy sản phẩm.</p>
          <a href="/" className="text-blue-600 hover:underline">← Quay lại</a>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <a href="/" className="inline-flex items-center text-blue-600 hover:underline text-sm mb-8">
          ← Back to products
        </a>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-10">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-80 w-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                  {product.title}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">
                    {product.rating?.rate} / 5 ({product.rating?.count} reviews)
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-3xl font-bold text-green-600 mb-5">
                  ${product.price}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button variant="primary">Add to Cart</Button>
                  <Button variant="outline">Wishlist</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}