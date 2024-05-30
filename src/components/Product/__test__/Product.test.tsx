import { fireEvent, render, screen } from "@testing-library/react"
import Product from "../Product";

const mockAlert = jest.fn();
window.alert = mockAlert;

describe("Product Component", () => {
  const testProps = {
    imageUrl: "https://example.com/image.jpg",
    name: "Test Product",
    price: 9.99,
    description: "This is a test product.",
  }

  it("renders the product name, price, and description", () => {
    render(<Product {...testProps} />);

    expect(screen.getByText<HTMLElement>(testProps.name)).toBeInTheDocument();
    expect(screen.getByText(`$${testProps.price}`)).toBeInTheDocument();
    expect(screen.getByText(testProps.description)).toBeInTheDocument();
  });

  it("renders the product image", () => {
    render(<Product {...testProps} />);
    expect(screen.getByAltText(testProps.name)).toHaveAttribute(
      "src",
      testProps.imageUrl
    );
  });

  it("increments the quantity when the increment button is clicked", () => {
    render(<Product {...testProps} />);
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrements the quantity when the decrement button is clicked", () => {
    render(<Product {...testProps} />);
    const incrementButton = screen.getByText("+");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    const decrementButton = screen.getByText("-");
    fireEvent.click(decrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("adds the product to the cart when the add to cart button is clicked", () => {
    render(<Product {...testProps} />);
    const addToCartButton = screen.getByText("Add to Cart");
    fireEvent.click(addToCartButton);
    expect(mockAlert).toHaveBeenCalledWith(`Added 0 ${testProps.name} to cart`);
  });
});

