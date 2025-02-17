"use server";
import { z } from "zod";

const ingredientSchema = z
  .string()
  .min(2, "Ingredient must be at least 2 characters")
  .max(20, "Ingredient must be less than 20 characters")
  .regex(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed");

export async function searchIngredients(prevState: any, formData: FormData) {
  const ingredient = formData.get("ingredient") as string;

  const result = ingredientSchema.safeParse(ingredient);
  if (!result.success) {
    return { error: result.error.errors[0].message };
  }

  const availableIngredients = ["Chicken", "Salmon", "Beef", "Pork", "Avocado", "Apple Cider Vinegar", "Asparagus", "Aubergine","Baby Plum Tomatoes","Baking Powder","Balsamic Vinegar","Basil"];
  const results = availableIngredients.filter((item) =>
    item.toLowerCase().includes(ingredient.toLowerCase())
  );

  return { results };
}
