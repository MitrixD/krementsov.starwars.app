import { gql, useQuery } from "@apollo/client";

export const GET_ALL_SHIPS = gql`
    query {
        allStarships {
            starships {
                id
                name
                model
            }
        }
    }
`;

export const GET_SHIP_DETAILS = gql`
    query GetStarshipDetails($id: ID!) {
        starship(id: $id) {
            name
            model
            starshipClass
            manufacturers
            costInCredits
            length
            crew
            passengers
            maxAtmospheringSpeed
            hyperdriveRating
            MGLT
            cargoCapacity
            consumables
        }
    }
`;

export const useQueryAllShips = () => {
  const { data, loading, error } = useQuery(GET_ALL_SHIPS);

  return {
    data,
    loading,
    error,
  };
}

export const useQueryShipDetails = (id?: string) => {
  const { data, loading, error } = useQuery(GET_SHIP_DETAILS, {
    variables: { id },
    skip: !id
  });

  return {
    data,
    loading,
    error,
  };
};
