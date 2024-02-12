import { FC } from "react";
import { useQueryCharacterDetails } from "../graphQl/queries/charactersQueries.ts";
import { Link, useMatch } from "react-router-dom";
import { URL_PATHS } from "../constants/urlPaths.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { getImageUrl } from "../helpers/ImageHelper.ts";
import ErrorPage from "./ErrorPage.tsx";

const CharacterDetailsPage: FC = () => {
  const match = useMatch(URL_PATHS.CHARACTER_DETAILS);
  const { data, loading, error } = useQueryCharacterDetails(match?.params?.id);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Stack direction={"column"} padding={2} paddingTop={4} gap={2}>
      <Stack direction={"row"}>
        <Link to={URL_PATHS.CHARACTERS_PAGE}>
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
          sx={{ minWidth: 200, maxWidth: 300, width: "100%", height: "auto" }}
          image={getImageUrl(match?.params?.id, "characters")}
          alt={"Character image"}
        />
        {loading ? (
          <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
            <CircularProgress color={"warning"} />
          </Stack>
        ) : (
          <Stack padding={4} paddingTop={2} minWidth={150}>
            <Typography variant="h4" gutterBottom paddingBottom={1}>
              {data?.person.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Birth Year:</strong> {data?.person.birthYear}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Height:</strong> {data?.person.height}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Mass:</strong> {data?.person.mass}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Gender:</strong> {data?.person.gender}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Eye Color:</strong> {data?.person.eyeColor}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Hair Color:</strong> {data?.person.hairColor}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Skin Color:</strong> {data?.person.skinColor}
            </Typography>
            {data?.person.homeworld?.name && (
              <Typography variant="body1" gutterBottom>
                <strong>Homeworld:</strong> {data.person.homeworld.name}
              </Typography>
            )}
            <Typography variant="body1" gutterBottom>
              <strong>Species:</strong> {data.person?.species?.name || "n/a"}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Episodes:</strong>{" "}
              {data.person?.filmConnection?.edges
                ?.map((edge: any) => edge.node.title)
                ?.join(", ") || "N/A"}
            </Typography>
          </Stack>
        )}
      </Card>
    </Stack>
  );
};

export default CharacterDetailsPage;
