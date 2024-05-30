import { render, screen } from "@testing-library/react";
import ProductPage from "../page"

describe("Product Page", () => {
  it("renders the product list from builder.io CMS", async () => {
    const jsx = await ProductPage();
    render(jsx);

    const products = screen.getAllByRole("listitem");
    expect(products.length).toBeGreaterThan(0);
  })
})