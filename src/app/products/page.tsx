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
    <ul className="flex items-center justify-center">
      {products.map((product, i) => (
        <li key={i}>
          <Product {...(product.data as ProductProps)} />
        </li>
      ))}
    </ul>
  );
};

export default ProductPage;
