import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { URL_PATHS } from "../../constants/urlPaths.ts";
import { NavMenu } from "./NavMenu.tsx";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        paddingTop: 1,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to={URL_PATHS.HOME_PAGE} style={{ textDecoration: "none" }}>
          <Typography
            textAlign={"center"}
            variant={"h2"}
            style={{ wordWrap: "break-word" }}
          >
            STAR WARS
          </Typography>
        </Link>
        <NavMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
