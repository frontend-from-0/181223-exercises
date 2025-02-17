"use server";

import { z } from "zod";
import { RecipeFormData, SaveRecipeActionResponse } from "../types/recipe";
import { addDoc } from "firebase/firestore";
import { recipesCollectionRef } from "../store/firebase/config";

const recipeSchema = z.object({
  strMeal: z.string().min(2, "Name of the meal is required"),
  strInstructions: z
    .string()
    .min(50, "Cooking instructions should be at least 50 chars long."),
  strMealThumb: z
    .string()
    .url("Please provide a correct url pointing to an image."),
});

export async function saveRecipe(
  prevState: SaveRecipeActionResponse | null,
  formData: FormData,
): Promise<SaveRecipeActionResponse> {
  console.log("saveRecipe action");
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const rawData: RecipeFormData = {
      strMeal: formData.get("strMeal") as string,
      strInstructions: formData.get("strInstructions") as string,
      strMealThumb: formData.get("strMealThumb") as string,
    };

    // Validate the form data
    const validatedData = recipeSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Please correct the errors in the form",
        errors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    try {
      const docRef = await addDoc(recipesCollectionRef, {
        idMeal: Date.now(),
        ...validatedData.data
      });

      return {
        success: true,
        message: `New recipe with id ${docRef.id} saved successfully!`,
        inputs: validatedData.data
      };
    } catch (error) {
      console.error(
        "An unexpected error occured when trying to save a recipe in DB",
        error,
      );
      throw new Error("An error occured when trying to save data in the DB.");
    }
  } catch (error) {
    console.error(
      "An unexpected error occured when trying to save a recipe",
      error,
    );
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
