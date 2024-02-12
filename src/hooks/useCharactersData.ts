import { useQueryCharactersData } from "../graphQl/queries/charactersQueries.ts";
import { useMemo } from "react";

export const useCharactersData = (
  selectedSpecies: string | null,
  selectedPlanets: string | null,
  selectedEpisodes: string | null,
) => {
  const { loading, error, data } = useQueryCharactersData();

  const filteredCharacters = useMemo(() => {
    if (!data?.allPeople?.people) {
      return [];
    }
    return data.allPeople.people.filter((character: any) => {
      const speciesMatch =
        !selectedSpecies || character.species?.name === selectedSpecies;
      const planetMatch =
        !selectedPlanets || character.homeworld?.name === selectedPlanets;
      const episodesMatch =
        !selectedEpisodes ||
        character.filmConnection?.edges?.find(
          (edge: any) => edge.node.title === selectedEpisodes,
        ) !== undefined;
      return speciesMatch && planetMatch && episodesMatch;
    });
  }, [
    selectedSpecies,
    selectedPlanets,
    selectedEpisodes,
    data?.allPeople?.people,
  ]);

  const speciesOptions = useMemo(
    () => (!data?.allSpecies?.species ? [] : data.allSpecies.species),
    [data?.allSpecies?.species],
  );

  const planetsOptions = useMemo(
    () => (!data?.allPlanets?.planets ? [] : data.allPlanets.planets),
    [data?.allPlanets?.planets],
  );

  const episodesOptions = useMemo(
    () => (!data?.allFilms?.films ? [] : data.allFilms.films),
    [data?.allFilms?.films],
  );

  return {
    loading,
    error,
    filteredCharacters,
    speciesOptions,
    planetsOptions,
    episodesOptions,
  };
};
