import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <a key={item.id} href={`/product/${item.id}`}>
              <ProductCard product={item} />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}