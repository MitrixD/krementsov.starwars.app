import { Components, Palette, Theme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const commonThemeRewritesComponents: Components<
  Omit<Theme, "components">
> = {
  MuiCard: {
    styleOverrides: {
      root: {
        border: "1px solid rgba(255,167,39,0.6)",
        backgroundColor: "transparent",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: "#ffa726",
      }
    }
  }
};

export const commonThemeRewritesTypo:
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions) = () => {
    return {
      fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      fontSize: 14,
      body1: {
        color: "#ffa726",
      },
      caption: {
        fontFamily: "SF Distant Galaxy, sans-serif",
        color: "#ffa726",
        fontSize: 18,
      },
      h4: {
        color: "#ffa726",
      },
      h6: {
        color: "#ffa726",
      },
      h3: {
        color: "#ffa726",
        fontFamily: "SF Distant Galaxy, sans-serif",
      },
      h2: {
        fontFamily: "SF Distant Galaxy, sans-serif",
        color: "#ffe229",
      },
    };
  };
