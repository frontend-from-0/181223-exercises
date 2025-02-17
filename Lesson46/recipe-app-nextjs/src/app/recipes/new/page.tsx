import NewRecipeForm from "./NewRecipeForm";

export default function NewRecipePage() {
  return (
    <div className="max-w-screen-sm mx-auto drop-shadow">
      <h1 className='mb-4 text-2xl font-bold'>Create New Recipe</h1>
      <NewRecipeForm />
    </div>
  );
}
