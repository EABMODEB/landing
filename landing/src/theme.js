import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#3b4752",
      light: "#767e86",
    },
    secondary: {
      main: "#febe10",
    },
    background: {
      default: "#dae3e5",
      light: "#4c5863",
      dark: "#3b4752",
    },
    text: {
      primary: "#3b4752",
      secondary: "#767e86",
      light: "#dae3e5",
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

export default theme;
