import { gql, useQuery } from "@apollo/client";

export const GET_ALL_EPISODES = gql`
    query {
        allFilms {
            films {
                id
                title
                releaseDate
            }
        }
    }
`;

export const GET_EPISODE_DETAILS = gql`
    query GetFilmDetails($id: ID!) {
        film(id: $id) {
            id
            title
            director
            producers
            releaseDate
            openingCrawl
        }
    }
`;

export const useQueryAllEpisodes  = () =>{
  const { data, loading, error } = useQuery(GET_ALL_EPISODES);

  return {
    data,
    loading,
    error,
  };
}

export const useQueryEpisodeDetails = (id?: string) => {
  const { data, loading, error } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id },
    skip: !id
  });

  return {
    data,
    loading,
    error,
  };
};
