import { render, screen } from "@testing-library/react";
import HomePage from "../page";

describe("HomePage", () => {
  it("renders Hello World", () => {
    render(<HomePage />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
})
