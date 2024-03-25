import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { ThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { theme } from "./styles/Theme.js";
import AppRouter from "./routes.jsx";

const muiTheme = createTheme();
const mergedTheme = createTheme(muiTheme, theme);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={mergedTheme}>
        <GlobalStyles />
        <AppRouter />
      </MuiThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
