export const WALLPAPER_THEME = "chemex";
export const APP_NAME = "BrewMe";
export type AppEnv = "local" | "cloud";
let APP_ENV;

APP_ENV = "local";

// APPWRITE CONFIG VARIABLES
// Create a new project in your console or self hosted site:
// https://cloud.appwrite.io/console

let PROJECT_ID = ""; // set by one of the two variables below based on the APP_ENV config
const PROJECT_ID_LOCAL = "662e68b900047362a8bb";
const PROJECT_ID_CLOUD = "662d2cf30009e279a878";

let API_BASE = "";

const API_BASE_LOCAL = "http://localhost:8080/v1";
const API_BASE_CLOUD = "https://cloud.appwrite.io/v1";

if (APP_ENV == "local") {
  PROJECT_ID = PROJECT_ID_LOCAL;
  API_BASE = API_BASE_LOCAL;
} else {
  PROJECT_ID = PROJECT_ID_CLOUD;
  API_BASE = API_BASE_CLOUD;
}

export { PROJECT_ID, API_BASE };

export const DATABASE_ID = "662d2d500014d575705f";
export const COLLECTION_ID_SAVED_BREWS = "662d2dae0035ade2019b"; // you can have multiple collection IDs configure more here
