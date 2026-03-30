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
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">All Products</h2>
          <p className="text-gray-500 mt-1">{products.length} items available</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {products.map((item) => (
            <a key={item.id} href={`/product/${item.id}`} style={{ display: "block" }}>
              <ProductCard product={item} />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}