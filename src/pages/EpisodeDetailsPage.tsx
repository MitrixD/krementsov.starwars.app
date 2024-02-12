import { FC } from "react";
import { Link, useMatch } from "react-router-dom";
import { URL_PATHS } from "../constants/urlPaths.ts";
import { useQueryEpisodeDetails } from "../graphQl/queries/episodesQueries.ts";
import {
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getImageUrl } from "../helpers/ImageHelper.ts";
import ErrorPage from "./ErrorPage.tsx";

const EpisodeDetailsPage: FC = () => {
  const match = useMatch(URL_PATHS.EPISODE_DETAILS);
  const { data, loading, error } = useQueryEpisodeDetails(match?.params?.id);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Stack direction={"column"} padding={2} paddingTop={4} gap={2}>
      <Stack direction={"row"}>
        <Link to={URL_PATHS.EPISODES_PAGE}>
          <Button
            color={"warning"}
            variant={"outlined"}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Link>
      </Stack>
      <Card sx={{ display: "flex", width: "100%" }}>
        <CardMedia
          loading={"lazy"}
          component="img"
          sx={{
            minWidth: 150,
            maxWidth: 300,
            width: "100%",
            height: "auto",
            maxHeight: 400,
          }}
          image={getImageUrl(match?.params?.id, "episodes")}
          alt={"Episode title"}
        />
        {loading ? (
          <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
            <CircularProgress color={"warning"} />
          </Stack>
        ) : (
          <Stack padding={4} paddingTop={2} minWidth={150}>
            <Typography variant="h4" gutterBottom paddingBottom={1}>
              {data?.film.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Release date:</strong> {data?.film.releaseDate}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Director:</strong> {data?.film.director}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Producers:</strong> {data?.film.producers}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Description:</strong> {data?.film.openingCrawl}
            </Typography>
          </Stack>
        )}
      </Card>
    </Stack>
  );
};

export default EpisodeDetailsPage;
