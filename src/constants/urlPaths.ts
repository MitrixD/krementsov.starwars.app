export enum URL_PATHS {
  HOME_PAGE = "/",
  CHARACTERS_PAGE = "/characters",
  SHIPS_PAGE = "/ships",
  EPISODES_PAGE = "/episodes",
  CHARACTER_DETAILS = "/characters/:id",
  SHIP_DETAILS = "/ships/:id",
  EPISODE_DETAILS = "/episodes/:id",
}

export const BASE_ASSETS_URL = "https://starwars-visualguide.com/assets/img/";
export const PLACEHOLDER_URL = `${BASE_ASSETS_URL}placeholder.jpg`;
export const CHARACTERS_SECTION_URL = `${BASE_ASSETS_URL}categories/character.jpg`;
export const SHIPS_SECTION_URL = `${BASE_ASSETS_URL}categories/starships.jpg`;
export const EPISODES_SECTION_URL = `${BASE_ASSETS_URL}categories/films.jpg`;
