import { Link } from "react-router-dom";
import type { Product } from "../types";
import { formatPrice } from "../utils/format";

function ProductCard({ product }: { product: Product }) {
  const { id, image, price, title } = product;

  return (
    <Link
      to={`/products/${id}`}
      className="border border-stone-200 rounded-lg p-3 flex flex-col gap-2 bg-white"
    >
      <div className="flex justify-center w-full">
        <img src={image} alt={title} className="h-[200px] w-[150px]" />
      </div>
      <p className="text-sm h-[60px] line-clamp-3">{title}</p>
      <div className="flex flex-col gap-1">
        <p className="text-xs line-through">{formatPrice(price * 1.5)}</p>
        <p className="flex items-center gap-1">
          <span className="text-xl font-black text-lime-700">
            {formatPrice(price)}
          </span>
          <span className="text-xs bg-lime-700 text-white px-1 py-1 border rounded-3xl">
            -10%
          </span>
        </p>
        <p className="flex flex-col text-sm">
          <span>À vista no PIX</span>
          <span>ou até 10x {formatPrice((price * 1.15) / 10)}</span>
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
