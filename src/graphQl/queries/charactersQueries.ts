import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTERS_DATA = gql`
    query {
        allPeople {
            people {
                id
                name
                birthYear
                eyeColor
                gender
                hairColor
                skinColor
                height
                mass
                filmConnection {
                    edges {
                        node {
                            title
                        }
                    }
                }
                homeworld {
                    name
                }
                species {
                    name
                }
            }
        }
        allPlanets {
            planets {
                name
                id
            }
        }
        allSpecies {
            species {
                name
                id
            }
        }
        allFilms {
            films {
                name: title
                id
            }
        }
    }
`;

export const GET_CHARACTER_DETAILS = gql`
    query GetCharacterDetails($id: ID!) {
        person(id: $id) {
            id
            name
            birthYear
            eyeColor
            gender
            hairColor
            skinColor
            height
            mass
            filmConnection {
                edges {
                    node {
                        title
                    }
                }
            }
            homeworld {
                name
            }
            species {
                name
            }
        }
    }
`;

export const useQueryCharactersData = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS_DATA);

  return {
    data,
    loading,
    error,
  };
}

export const useQueryCharacterDetails = (id?: string) => {
  const { data, loading, error } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
    skip: !id
  });

  return {
    data,
    loading,
    error,
  };
};
