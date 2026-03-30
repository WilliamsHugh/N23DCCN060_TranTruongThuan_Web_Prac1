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
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">All Products</h2>
          <div className="w-12 h-0.5 bg-gray-900 mx-auto mt-3"></div>
        </div>

        {/* Grid */}
        <div className="product-grid">
          {products.filter(item => item && item.id).map((item) => (
            <a key={item.id} href={`/product/${item.id}`} style={{ display: "block", height: "100%" }}>
              <ProductCard product={item} />
            </a>
          ))}
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-100 py-8 text-center text-xs text-gray-400 tracking-widest uppercase">
        © 2025 MyStore · All rights reserved
      </footer>
    </div>
  );
}