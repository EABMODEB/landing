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
      light: "#033c51",
      dark: "#033547",
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
