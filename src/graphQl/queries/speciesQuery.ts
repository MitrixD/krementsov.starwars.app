import {gql, useQuery} from "@apollo/client";


const GET_ALL_SPECIES = gql`
    query GetSpeciesOptions {
        allSpecies {
            species {
                id
                name
            }
        }
    }
`;

export const useQueryAllSpecies = () => {
  const { data, loading, error } = useQuery(GET_ALL_SPECIES);

  return {
    data,
    loading,
    error,
  };
}
