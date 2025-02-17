import Link from "next/link";

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ recipeId: string }>
}) {
  const recipeId = (await params).recipeId;

  const recipeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
  if (!recipeResponse.ok) {
    throw new Error("Failed to fetch data from the server");
  }
  const recipe = (await recipeResponse.json()).meals[0];



  return (
    <div>
      <h1>Current recipe is: {recipeId} </h1>
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strInstructions}</p>
      <Link href="/" className="block my-8 underline">Return to the main page</Link>
    </div>
  );
}
