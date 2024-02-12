import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { URL_PATHS } from "../../constants/urlPaths.ts";

export const NavMenu: FC = () => {
  const location = useLocation();

  return (
    <Stack data-testid="nav-menu" direction={"row"} gap={2}>
      <Typography
        sx={{
          textDecoration:
            location.pathname === URL_PATHS.HOME_PAGE ? "underline" : "none",
        }}
        variant="caption"
        component={Link}
        to={URL_PATHS.HOME_PAGE}
      >
        Home
      </Typography>
      <Typography
        sx={{
          textDecoration: location.pathname?.includes(URL_PATHS.CHARACTERS_PAGE) ?
            "underline" :
            "none",
        }}
        variant="caption"
        component={Link}
        to={URL_PATHS.CHARACTERS_PAGE}
      >
        Characters
      </Typography>
      <Typography
        sx={{
          textDecoration: location.pathname?.includes(URL_PATHS.SHIPS_PAGE) ?
            "underline" :
            "none",
        }}
        variant="caption"
        component={Link}
        to={URL_PATHS.SHIPS_PAGE}
      >
        Ships
      </Typography>
      <Typography
        sx={{
          textDecoration: location.pathname?.includes(URL_PATHS.EPISODES_PAGE) ?
            "underline" :
            "none",
        }}
        variant="caption"
        component={Link}
        to={URL_PATHS.EPISODES_PAGE}
      >
        Episodes
      </Typography>
    </Stack>
  );
};
