import useAxios from "../hooks/useAxios";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";

function Home() {
  const { data: products, loading, error } = useAxios<Product[]>("/products");

  return (
    <main className="flex justify-center bg-stone-100">
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:w-[98rem] p-5 min-h-[100vh]">
        {loading && <p>Carregando...</p>}
        {error && <p>Erro. Tente novamente mais tarde.</p>}
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Home;
