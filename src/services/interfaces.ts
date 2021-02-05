export interface Nutrition {
  values: Object;
  percentages: Object;
}

export interface Tag {
  id: String;
  type: String;
  title: String;
}

export interface Instruction {
  title: String;
  steps: Array<String>;
}

export interface Images {
  hz: String;
  vt: String;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  nutrition: Nutrition;
  time: Object;
  difficulty: Object;
  images: Images;
  tags: Array<Tag>;
  instructionSections: Array<Instruction>;
  rating: Number;
}

export interface RecipePage {
  listRecipes: Array<Recipe>;
  totalSize: Number;
  nextPage: Number;
}

export interface QueryResponse {
  data: RecipePage;
  loading: Boolean;
  fetchMore: Function;
}