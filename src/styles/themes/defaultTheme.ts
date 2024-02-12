import { createTheme } from "@mui/material";
import {
  commonThemeRewritesComponents,
  commonThemeRewritesTypo,
} from "./commonThemeRewrites.ts";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: commonThemeRewritesTypo,
  components: {
    ...commonThemeRewritesComponents,
  },
});

export { defaultTheme };
