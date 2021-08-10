import { createTheme } from "@material-ui/core/styles";

// const font =  "'Roboto', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: "#507dbc",
      dark: "#3626a7",
    },
    secondary: {
      main: "#a1c6ea",
      light: "#bbd1ea",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#04080f",
      light: "#dae3e5",
    },
  },
  typography: {
    // fontFamily: font,
    htmlFontSize: 10,
  },
});

export default theme;
