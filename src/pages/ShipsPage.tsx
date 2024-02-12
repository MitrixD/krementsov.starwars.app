import { FC } from "react";
import { useQueryAllShips } from "../graphQl/queries/shipsQueries.ts";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import ItemCard from "../components/Card/ItemCard.tsx";
import { generatePath } from "react-router-dom";
import { URL_PATHS } from "../constants/urlPaths.ts";
import { getImageUrl } from "../helpers/ImageHelper.ts";
import ErrorPage from "./ErrorPage.tsx";

const ShipsPage: FC = () => {
  const { loading, error, data } = useQueryAllShips();

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
        Ships
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data.allStarships.starships.map((ship: any) => (
          <Grid key={ship.id} item xs={12} sm={4} md={3} lg={3} xl={3}>
            <ItemCard
              linkTo={generatePath(URL_PATHS.SHIP_DETAILS, {
                id: ship.id,
              })}
              imageUrl={getImageUrl(ship.id, "ships")}
              title={ship.name}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default ShipsPage;
