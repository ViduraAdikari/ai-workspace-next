import {createTheme, Theme, ThemeOptions} from "@mui/material/styles";
import {blue, blueGrey, cyan, grey, purple, teal} from "@mui/material/colors";
import {makeResponsive} from "./themeUtil";
import {isRoundedBorders} from "@/const/values";

declare module "@mui/material/styles" {

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

const commonThemeOptions: ThemeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: [
      "Roboto Slab",
      "serif",
    ].join(","),
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 500,
          borderRadius: isRoundedBorders ? 7 : 0,
        },
        sizeSmall: {
          padding: "2px 16px",
        },
        sizeMedium: {
          padding: "3px 30px",
          fontSize: ".8rem",
          fontWeight: 600,
        },
        sizeLarge: {
          padding: "8px 50px",
          fontSize: "1rem",
          fontWeight: 500,
        }
      }
    },

    MuiCardHeader: {
      styleOverrides: {
        root: {
          margin: "20px 0",
        }
      }
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          margin: "20px 16px",
        }
      }
    },

    MuiFilledInput: {
      styleOverrides: {
        root: ({theme}) => ({
          borderRadius: isRoundedBorders ? "7px" : 0,
          "&::before, &::after": {
            borderBottom: "none"
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "none",
          },
          "&.Mui-focused:after": {
            borderBottom: "none",
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.mode === "dark" ? grey[600] : blueGrey[100],
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({theme}) => ({
          "&.Mui-focused": {
            color: theme.palette.mode === "dark" ? theme.palette.secondary.light : theme.palette.primary.main,
          }
        })
      }
    },

    MuiGrid: {
      styleOverrides: {
        root: {
          "& .MuiGrid-item": {
            padding: "12px 16px !important",
          }
        }
      }
    },

  }
}

export const darkThemeOptions: ThemeOptions = {
  palette: {
    contrastThreshold: 4.5,
    mode: "dark",
    text: {
      primary: grey[50],
      secondary: grey[200],
      disabled: grey[500],
    },
    background: {
      default: "#263238",
      paper: grey[800]
    },
    primary: {
      main: teal[500],
      light: teal[300],
      dark: teal[800],
      contrastText: grey[900]
    },
    secondary: {
      main: blue[500],
      light: blue[300],
      dark: cyan[800],
      contrastText: grey[50]
    },
  },
  ...commonThemeOptions,
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    text: {
      primary: grey[900],
      secondary: grey[700],
      disabled: grey[500],
    },
    background: {
      default: "#f1f1f1",
      paper: grey[100]
    },
    primary: {
      main: cyan[500],
      light: cyan[300],
      dark: cyan[800],
      contrastText: grey[100]
    },
    secondary: {
      main: purple[600],
      light: purple[300],
      dark: purple[800],
      contrastText: grey[100]
    },
    common: {
      white: "#fefefe",
      black: "#000000"
    }
  },
  ...commonThemeOptions,
}

export const getTheme = (mode: "dark" | "light", direction: "ltr" | "rtl" = "ltr"): Theme => {
  const theme: Theme =
    createTheme({...(mode === "dark" ? darkThemeOptions : lightThemeOptions), direction: direction});
  return makeResponsive(theme);
}
