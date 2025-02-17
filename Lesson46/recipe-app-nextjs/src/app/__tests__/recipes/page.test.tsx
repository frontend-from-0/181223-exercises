import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../../recipes/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByTestId("recipe-list-title");

    
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Recipe list");
  });
});
