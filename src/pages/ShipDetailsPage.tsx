import { FC } from "react";
import {
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { getImageUrl } from "../helpers/ImageHelper.ts";
import { Link, useMatch } from "react-router-dom";
import { URL_PATHS } from "../constants/urlPaths.ts";
import { useQueryShipDetails } from "../graphQl/queries/shipsQueries.ts";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorPage from "./ErrorPage.tsx";

const ShipDetailsPage: FC = () => {
  const match = useMatch(URL_PATHS.SHIP_DETAILS);
  const { data, loading, error } = useQueryShipDetails(match?.params?.id);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Stack direction={"column"} padding={2} paddingTop={4} gap={2}>
      <Stack direction={"row"}>
        <Link to={URL_PATHS.SHIPS_PAGE}>
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
          image={getImageUrl(match?.params?.id, "ships")}
          alt={"Character image"}
        />
        {loading ? (
          <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
            <CircularProgress color={"warning"} />
          </Stack>
        ) : (
          <Stack padding={4} paddingTop={2} minWidth={150}>
            <Typography variant="h4" gutterBottom paddingBottom={1}>
              {data?.starship.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Model:</strong> {data?.starship.model}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Class:</strong> {data?.starship.starshipClass}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Length:</strong> {data?.starship.length}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Max speed:</strong> {data?.starship.maxAtmospheringSpeed}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Manufacturers:</strong> {data?.starship.manufacturers}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Cost in credits:</strong> {data?.starship.costInCredits}
            </Typography>
          </Stack>
        )}
      </Card>
    </Stack>
  );
};

export default ShipDetailsPage;
