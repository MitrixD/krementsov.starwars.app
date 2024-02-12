import { FC } from "react";
import { useQueryAllEpisodes } from "../graphQl/queries/episodesQueries.ts";
import { getImageUrl } from "../helpers/ImageHelper.ts";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import ItemCard from "../components/Card/ItemCard.tsx";
import { generatePath } from "react-router-dom";
import { URL_PATHS } from "../constants/urlPaths.ts";
import ErrorPage from "./ErrorPage.tsx";

const EpisodesPage: FC = () => {
  const { loading, error, data } = useQueryAllEpisodes();

  if (loading) {
    return (
      <Stack
        width={"100%"}
        direction={"column"}
        marginTop={6}
        alignItems={"center"}
      >
        <CircularProgress size={50} color={"warning"} />
      </Stack>
    );
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Stack padding={2} paddingTop={3} gap={2}>
      <Typography variant={"h4"} fontWeight={"bold"}>
        Episodes
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.allFilms.films.map((episode: any) => (
          <Grid key={episode.id} item xs={12} sm={4} md={3}>
            <ItemCard
              linkTo={generatePath(URL_PATHS.EPISODE_DETAILS, {
                id: episode.id,
              })}
              imageUrl={getImageUrl(episode.id, "episodes")}
              title={episode.title}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default EpisodesPage;
