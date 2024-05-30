import Product, { type ProductProps } from "@/components/Product/Product";
import { builder } from "@builder.io/sdk";

const ProductPage = async () => {
  const products = await builder.getAll("products", {
    apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY,
    options: {
      enrich: true,
    },
  });

  return (
    <div className="flex items-center justify-center">
      {products.map((product, i) => (
        <Product key={i} {...(product.data as ProductProps)} />
      ))}
    </div>
  );
};

export default ProductPage;
