import { FC } from "react";
import {
  CHARACTERS_SECTION_URL,
  EPISODES_SECTION_URL,
  SHIPS_SECTION_URL,
  URL_PATHS,
} from "../constants/urlPaths.ts";
import { Grid, Stack } from "@mui/material";
import ItemCard from "../components/Card/ItemCard.tsx";

const HomePage: FC = () => {
  return (
    <Stack padding={2} paddingTop={6} gap={2} alignItems={"center"}>
      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <ItemCard
            imageUrl={CHARACTERS_SECTION_URL}
            title={"Characters"}
            linkTo={URL_PATHS.CHARACTERS_PAGE}
          />
        </Grid>
        <Grid item>
          <ItemCard
            imageUrl={SHIPS_SECTION_URL}
            title={"Ships"}
            linkTo={URL_PATHS.SHIPS_PAGE}
          />
        </Grid>
        <Grid item>
          <ItemCard
            imageUrl={EPISODES_SECTION_URL}
            title={"Episodes"}
            linkTo={URL_PATHS.EPISODES_PAGE}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomePage;
