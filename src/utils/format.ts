function formatPrice(price: number) {
  const formattedPrice = price.toFixed(2);
  return `R$ ${formattedPrice}`;
}

export { formatPrice };
