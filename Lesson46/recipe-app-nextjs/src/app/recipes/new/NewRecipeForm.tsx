"use client";

import { Button, Field, Input, Label } from "@headlessui/react";
import { saveRecipe } from "actions/recipe";
import { useActionState } from "react";
import { SaveRecipeActionResponse } from "types/recipe";
import { CreatedRecipe } from "./CreatedRecipe";

const initialState: SaveRecipeActionResponse = {
  success: false,
  message: "",
};

export default function NewRecipeForm() {
  const [state, action, pending] = useActionState(saveRecipe, initialState);
  const {strMeal, strInstructions, strMealThumb} = state?.inputs || {};

  if (state.success)
    return (
      <>
        <h2>Successfully added</h2>
        {strMeal && strInstructions && strMealThumb && (
          <CreatedRecipe title={strMeal} instructions={strInstructions} image={strMealThumb}/>
        )}
      </>
    );

  return (
    <form
      action={action}
      className="max-w-screen-sm mx-auto flex flex-col gap-10"
      noValidate
    >
      <Field className="flex flex-col">
        <Label>Meal name</Label>
        <Input
          name="strMeal"
          type="text"
          required
          defaultValue={state.inputs?.strMeal}
          aria-describedby="strMeal-error"
          invalid={!!state?.errors?.strMeal?.[0]}
          className="border rounded p-2 data-[hover]:shadow data-[invalid]:ring-red-500"
        />
        {state?.errors?.strMeal && (
          <p id="strMeal-error" className="text-sm text-red-500">
            {state.errors.strMeal[0]}
          </p>
        )}
      </Field>

      <Field className="flex flex-col">
        <Label>Cooking instructions</Label>
        <Input
          name="strInstructions"
          type="text"
          required
          defaultValue={state.inputs?.strInstructions}
          invalid={!!state?.errors?.strInstructions?.[0]}
          aria-describedby="strInstructions-error"
          className="border rounded p-2 data-[hover]:shadow data-[invalid]:ring-red-500"
        />
        {state?.errors?.strInstructions && (
          <p id="strInstructions-error" className="text-sm text-red-500">
            {state.errors.strInstructions[0]}
          </p>
        )}
      </Field>

      <Field className="flex flex-col">
        <Label>Image</Label>
        <Input
          name="strMealThumb"
          type="text"
          required
          defaultValue={state.inputs?.strMealThumb}
          invalid={!!state?.errors?.strMealThumb?.[0]}
          aria-describedby="strMealThumb-error"
          className="border rounded p-2 data-[hover]:shadow data-[invalid]:ring-red-500"
        />
        {state?.errors?.strMealThumb && (
          <p id="strMealThumb-error" className="text-sm text-red-500">
            {state.errors.strMealThumb[0]}
          </p>
        )}
      </Field>

      <Button
        data-testid="submit-button"
        type="submit"
        disabled={pending}
        className="rounded bg-green-800 py-2 px-4 text-sm text-green-50 data-[hover]:bg-greeen-600"
      >
        {pending ? "Saving..." : "Save recipe"}
      </Button>
    </form>
  );
}
