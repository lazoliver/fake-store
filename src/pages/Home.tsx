import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";

function Home() {
  const [localData, setLocalData] = useState<Product[] | null>(null);

  const { data, loading, error } = useAxios<Product[]>("/products");

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  console.log(localData);

  return (
    <main className="flex justify-center bg-stone-100">
      {error && <p>Erro. Tente novamente mais tarde.</p>}
      {loading && <p>Carregando...</p>}
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:w-[98rem] p-[20px]">
        {localData &&
          !loading &&
          localData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </main>
  );
}

export default Home;
