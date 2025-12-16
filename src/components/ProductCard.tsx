import type { Product } from "../types";

function ProductCard({ product }: { product: Product }) {
  const { image, price, title } = product;

  const formatedFullPrice = (price * 1.1).toFixed(2);
  const formatedPrice = price.toFixed(2);

  return (
    <div className="border-transparent rounded-lg p-3 flex flex-col gap-2 bg-white">
      <div className="flex justify-center w-full">
        <img src={image} alt={title} className="w-[150px] h-[200px]" />
      </div>
      <p className="text-sm h-[60px] line-clamp-3">{title}</p>
      <div className="flex flex-col gap-1">
        <p className="text-xs line-through">R$ {formatedFullPrice}</p>
        <p className="flex items-center gap-1">
          <span className="text-xl font-black text-lime-700">
            R$ {formatedPrice}
          </span>
          <span className="text-xs bg-lime-700 text-white px-1 py-1 border rounded-3xl">
            -10%
          </span>
        </p>
        <p className="flex flex-col text-sm">
          <span>À vista no PIX</span>
          <span>ou até 10x R$ {(price / 10).toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
