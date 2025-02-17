import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {CreatedRecipe} from "../../../recipes/new/CreatedRecipe";

const testImage = 'https://plus.unsplash.com/premium_photo-1669831178095-005ed789250a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

describe("CreatedRecipe", () => {
  it("renders component correctly", () => {
    render(<CreatedRecipe title='Test recipe' instructions="Test instructions" image={testImage} />);

    const card = screen.getByTestId("create-recipe-card");

    expect(card).toBeInTheDocument();
  });

  it('displays title correctly', () => {
    render(<CreatedRecipe title='Test recipe abcdef' instructions="Test instructions" image={testImage} />);

    const title = screen.getByTestId("create-recipe-title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Test recipe abcdef');
  });

  it('displays description correctly', () => {
    // TODO
  });

  it('displays image correctly', () => {
    // TODO (check both img element, src and alt text attributes)
  })
});
