import { FC, useState } from "react";
import { generatePath } from "react-router-dom";
import {
  CircularProgress,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { URL_PATHS } from "../constants/urlPaths.ts";
import { getImageUrl } from "../helpers/ImageHelper.ts";
import ItemCard from "../components/Card/ItemCard.tsx";
import ErrorPage from "./ErrorPage.tsx";
import SelectFilter from "../components/SelectFilter/SelectFilter.tsx";
import { useCharactersData } from "../hooks/useCharactersData.ts";

const CharactersPage: FC = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [selectedPlanets, setSelectedPlanets] = useState<string | null>(null);
  const [selectedEpisodes, setSelectedEpisodes] = useState<string | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    loading,
    error,
    filteredCharacters,
    speciesOptions,
    planetsOptions,
    episodesOptions,
  } = useCharactersData(selectedSpecies, selectedPlanets, selectedEpisodes);

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
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        justifyContent={isSmallScreen ? "flex-start" : "space-between"}
        alignItems={isSmallScreen ? "flex-start" : "center"}
        gap={isSmallScreen ? 2 : 1}
      >
        <Typography variant={"h4"} fontWeight={"bold"}>
          Characters
        </Typography>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          width={isSmallScreen ? "100%" : "auto"}
          gap={2}
        >
          <SelectFilter
            id={"planets-filter"}
            label={"Planets"}
            options={planetsOptions}
            onSelectValue={setSelectedPlanets}
          />
          <SelectFilter
            id={"species-filter"}
            label={"Species"}
            options={speciesOptions}
            onSelectValue={setSelectedSpecies}
          />
          <SelectFilter
            id={"episodes-filter"}
            label={"Episodes"}
            options={episodesOptions}
            onSelectValue={setSelectedEpisodes}
          />
        </Stack>
      </Stack>
      {filteredCharacters.length ? (
        <Grid
          container
          spacing={3}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {filteredCharacters.map((character: any) => (
            <Grid key={character.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
              <ItemCard
                imageUrl={getImageUrl(character.id, "characters")}
                title={character.name}
                linkTo={generatePath(URL_PATHS.CHARACTER_DETAILS, {
                  id: character.id,
                })}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Stack textAlign={"center"}>
          <Typography variant="h6">No characters</Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default CharactersPage;
