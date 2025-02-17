import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewRecipeForm from '../../../recipes/new/NewRecipeForm';
import { useActionState } from 'react';

// This component uses useActionState function, so we need to mock it inside the test to be able to use the functioality. When useActionState function is called during the test, we can specify manually what values it should return and write test specifically for it.
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useActionState: jest.fn(),
}));

describe('NewRecipeForm', () => {
  it('renders the form correctly', () => {
    // Mock implementation of useActionState
    (useActionState as jest.Mock).mockImplementation(() => [
      {
        // Here are we specify value that we want useActionState to return for this test case
        success: false,
        inputs: {
          strMeal: '',
          strInstructions: '',
          strMealThumb: '',
        },
        errors: {},
      },
      jest.fn(),
      false,
    ]);

    render(<NewRecipeForm />);

    // TODO: Check that all expected elements are present on the page
  });

  it('displays success message and CreatedRecipe component when state.success is true', () => {
    // Mock implementation of useActionState
    (useActionState as jest.Mock).mockImplementation(() => [
      {
        success: true,
        inputs: {
          strMeal: 'Test Meal',
          strInstructions: 'Test Instructions',
          strMealThumb: 'test-image.jpg',
        },
        errors: {},
      },
      jest.fn(),
      false,
    ]);

    render(<NewRecipeForm />);

    // TODO: Check if the success message and CreatedRecipe component are rendered
  });

  it('displays error messages state.errors returns errors', () => {
    // Mock implementation of useActionState
    (useActionState as jest.Mock).mockImplementation(() => [
      {
        success: false,
        inputs: {
          strMeal: '',
          strInstructions: '',
          strMealThumb: '',
        },
        // TODO: update this empty object with possible errors object
        errors: {},
      },
      jest.fn(),
      false,
    ]);

    render(<NewRecipeForm />);

    // TODO: Check if the error messages are shown
  });

  it('displays previously filled data when errors occured on submit', () => {
    // Mock implementation of useActionState
    (useActionState as jest.Mock).mockImplementation(() => [
      {
        success: false,
        inputs: {
          strMeal: 'Squash soup',
          strInstructions: '',
          strMealThumb: '',
        },
        errors: {
          strInstructions: 'Cooking instructions should be at least 50 chars long.',
          strMealThumb: 'Please provide a correct url pointing to an image.'
        },
      },
      jest.fn(),
      false,
    ]);

    render(<NewRecipeForm />);

    // TODO: Check that previously filled data is displayed in the input field (strMeal)
  });
});