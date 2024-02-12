import {
  charactersImageMap,
  episodesImageMap,
  shipsImageMap,
} from "../constants/imageMaps.ts";
import { BASE_ASSETS_URL, PLACEHOLDER_URL } from "../constants/urlPaths.ts";

export const getImageUrl = (id: string | undefined, type: "characters" | "episodes" | "ships"): string => {
  if (!id) {
    return PLACEHOLDER_URL;
  }

  let imageUrl = "";
  switch (type) {
  case "characters":
    imageUrl = `${BASE_ASSETS_URL}characters/${charactersImageMap[id]}.jpg`;
    break;
  case "episodes":
    imageUrl = `${BASE_ASSETS_URL}films/${episodesImageMap[id]}.jpg`;
    break;
  case "ships":
    imageUrl = shipsImageMap[id] === "none" ? PLACEHOLDER_URL : `${BASE_ASSETS_URL}starships/${shipsImageMap[id]}.jpg`;
    break;
  default:
    imageUrl = PLACEHOLDER_URL;
    break;
  }

  return imageUrl;
};
