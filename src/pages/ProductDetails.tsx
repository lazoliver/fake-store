import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import type { Product } from "../types";
import { formatPrice } from "../utils/format";

function ProductDetails() {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useAxios<Product>(id ? `/products/${id}` : "");

  return (
    <main className="flex justify-center">
      <div className="lg:w-[98rem] min-h-[100vh] p-5">
        {loading && <p>Carregando...</p>}
        {error && <p>Erro. Tente novamente mais tarde.</p>}
        {!product && !loading && (
          <div className="flex flex-col items-center gap-10">
            <p className="text-xl">Nenhum produto encontrado.</p>
            <a className="border h-fit w-fit rounded-xl p-4" href="/">
              Voltar para a Home
            </a>
          </div>
        )}
        {product && (
          <div className="grid lg:grid-cols-12 gap-2">
            <div className="flex items-center justify-center lg:col-span-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-[550px]"
              />
            </div>
            <div className="flex flex-col gap-5 lg:col-span-3 p-5">
              <p className="text-xl font-extrabold">{product.title}</p>
              <p>{product.description}</p>
            </div>
            <div className="flex flex-col gap-3 border border-stone-300 rounded-xl lg:col-span-3 p-5 h-fit">
              <div className="flex flex-col gap-2">
                <p className="line-through text-stone-500">
                  {formatPrice(product.price * 1.5)}
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-3xl text-lime-700 font-extrabold">
                    {formatPrice(product.price)}
                  </span>
                </p>
                <p className="text-xs text-stone-500">
                  À vista no PIX com 15% de desconto
                </p>
                <p className="text-xs text-stone-500">
                  <span>{formatPrice(product.price * 1.15)}</span> em até 10x de{" "}
                  {formatPrice(product.price / 10)} sem juros ou 1x com{" "}
                  <span>10% de desconto no cartão</span>
                </p>
              </div>
              <div>
                <button
                  onClick={() => console.log("Clicado")}
                  className="flex cursor-pointer justify-center p-2 border bg-lime-700 border-lime-700 text-white font-bold text-lg rounded-xl w-full"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductDetails;
