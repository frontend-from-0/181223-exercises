export interface Recipe {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate?: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string | null;
  strYoutube?: string | null;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
  strIngredient16?: string | null;
  strIngredient17?: string | null;
  strIngredient18?: string | null;
  strIngredient19?: string | null;
  strIngredient20?: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4?: string | null;
  strMeasure5?: string | null;
  strMeasure6?: string | null;
  strMeasure7?: string | null;
  strMeasure8?: string | null;
  strMeasure9?: string | null;
  strMeasure10?: string | null;
  strMeasure11?: string | null;
  strMeasure12?: string | null;
  strMeasure13?: string | null;
  strMeasure14?: string | null;
  strMeasure15?: string | null;
  strMeasure16?: string | null;
  strMeasure17?: string | null;
  strMeasure18?: string | null;
  strMeasure19?: string | null;
  strMeasure20?: string | null;
  strSource?: string | null;
  strImageSource?: string | null;
  strCreativeCommonsConfirmed?: string | null;
  dateModified?: string | null;
}

export enum Category {
  Beef = "Beef",
  Breakfast = "Breakfast",
  Chicken = "Chicken",
  Dessert = "Dessert",
  Goat = "Goat",
  Lamb = "Lamb",
  Miscellaneous = "Miscellaneous",
  Pasta = "Pasta",
  Pork = "Pork",
  Seafood = "Seafood",
  Side = "Side",
  Starter = "Starter",
  Vegan = "Vegan",
  Vegetarian = "Vegetarian"
};

export const Categories: Category[] = Object.values(Category);


export enum Area {
  American = "American",
  British = "British",
  Canadian = "Canadian",
  Chinese = "Chinese",
  Croatian = "Croatian",
  Dutch = "Dutch",
  Egyptian = "Egyptian",
  Filipino = "Filipino",
  French = "French",
  Greek = "Greek",
  Indian = "Indian",
  Irish = "Irish",
  Italian = "Italian",
  Jamaican = "Jamaican",
  Japanese = "Japanese",
  Kenyan = "Kenyan",
  Malaysian = "Malaysian",
  Mexican = "Mexican",
  Moroccan = "Moroccan",
  Polish = "Polish",
  Portuguese = "Portuguese",
  Russian = "Russian",
  Spanish = "Spanish",
  Thai = "Thai",
  Tunisian = "Tunisian",
  Turkish = "Turkish",
  Ukrainian = "Ukrainian",
  Unknown = "Unknown",
  Vietnamese = "Vietnamese"
};

export const Areas: Area[] = Object.values(Area);


export interface RecipeFormData {
  idMeal?: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
//   strDrinkAlternate?: string | null;
//   strCategory: string;
//   strArea: string;
//   strTags?: string | null;
//   strYoutube?: string | null;
//   strIngredient1: string;
//   strIngredient2: string;
//   strIngredient3: string;
//   strIngredient4?: string | null;
//   strIngredient5?: string | null;
//   strIngredient6?: string | null;
//   strIngredient7?: string | null;
//   strIngredient8?: string | null;
//   strIngredient9?: string | null;
//   strIngredient10?: string | null;
//   strIngredient11?: string | null;
//   strIngredient12?: string | null;
//   strIngredient13?: string | null;
//   strIngredient14?: string | null;
//   strIngredient15?: string | null;
//   strIngredient16?: string | null;
//   strIngredient17?: string | null;
//   strIngredient18?: string | null;
//   strIngredient19?: string | null;
//   strIngredient20?: string | null;
//   strMeasure1: string;
//   strMeasure2: string;
//   strMeasure3: string;
//   strMeasure4?: string | null;
//   strMeasure5?: string | null;
//   strMeasure6?: string | null;
//   strMeasure7?: string | null;
//   strMeasure8?: string | null;
//   strMeasure9?: string | null;
//   strMeasure10?: string | null;
//   strMeasure11?: string | null;
//   strMeasure12?: string | null;
//   strMeasure13?: string | null;
//   strMeasure14?: string | null;
//   strMeasure15?: string | null;
//   strMeasure16?: string | null;
//   strMeasure17?: string | null;
//   strMeasure18?: string | null;
//   strMeasure19?: string | null;
//   strMeasure20?: string | null;
//   strSource?: string | null;
//   strImageSource?: string | null;
//   strCreativeCommonsConfirmed?: string | null;
}

export interface SaveRecipeActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof RecipeFormData]?: string[];
  };
  inputs?: Partial<RecipeFormData>;
}