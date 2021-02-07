export interface Ingredient {
  carbs?: Number;
  fat?: Number;
  protein?: Number;
  fiber?: Number;
  calories?: Number;
}

export interface Nutrition {
  values: Ingredient;
  percentages: Ingredient;
}

export interface Tag {
  id: String;
  type: String;
  title: String;
}

export interface Instruction {
  title: String;
  steps: Array<String>;
  header?: Object;
  footer?: Object;
}

export interface Images {
  hz: String;
  vt: String;
  brightness: String;
}

export interface Recipe {
  id: string;
  slug: String;
  title: string;
  description: string;
  nutrition: Nutrition;
  time: Object;
  difficulty: Object;
  images: Images;
  tags: Array<Tag>;
  instructionSections: Array<Instruction>;
  rating: Number;
  isMembersOnly: Boolean;
  modifiedAt: String;
}

export interface RecipePage {
  recipes: Array<Recipe>;
  totalSize: Number;
  nextPage: Number;
}

export interface RecipeResponse {
  listRecipes: RecipePage;
}

export interface QueryResponse {
  data: RecipeResponse;
  loading: Boolean;
  error: Object;
  fetchMore: Function;
}
