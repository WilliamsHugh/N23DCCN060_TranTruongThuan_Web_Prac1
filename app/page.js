import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner */}
      <div className="bg-blue-600 text-white text-center py-10 px-4">
        <h1 className="text-3xl font-bold mb-2">Welcome to MyStore</h1>
        <p className="text-blue-100 text-sm">Discover our latest products at great prices</p>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">All Products</h2>
          <span className="text-sm text-gray-500">{products.length} items</span>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <a key={item.id} href={`/product/${item.id}`} style={{ display: "block", height: "100%" }}>
              <ProductCard product={item} />
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-16 py-6 text-center text-sm text-gray-400">
        © 2025 MyStore. All rights reserved.
      </footer>
    </div>
  );
}