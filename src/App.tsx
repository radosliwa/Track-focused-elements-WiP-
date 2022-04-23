import React from "react";
// hooks
import { useContext, useEffect, useState } from "react";
import { Context } from "./store/AppProvider";

// components
import { ChoseEvent } from "./components/ChoseEvent";
import { FocusedPanel } from "./components/FocusedPanel";
import { BcgColorConfig } from "./components/BcgColorConfig";

// MUI
import { CssBaseline, Typography } from "@mui/material";

import "./App.css";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontSize: "2rem",
    },
  },
});
theme = responsiveFontSizes(theme);

const { palette } = theme;

const App: React.FC = () => {
  const value = useContext(Context);
  useEffect(() => {
    /* @TODO  send:
    type of event,
    selected color,
    let queryOptions = { active: true, currentWindow: true };
    tabId
    */
    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
    //   const [tab] = tabs;
    //   const obj = {
    //     event: selectedTarget,
    //     color: "red",
    //     tabId: tab.id,
    //   };
    //   chrome.tabs.sendMessage(tab.id as number, obj, (response) => {
    //     setResponse(response ?? "no response");
    //   });
    // });
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="App" style={{ backgroundColor: palette.primary.light, color: palette.secondary.main }}>
        <header className="App-header">
          <Typography variant="h1" style={{ fontWeight: 600 }}>
            Track Focused Element!
          </Typography>
          <p>{JSON.stringify(value)}</p>
        </header>
        <main>
          <ChoseEvent />
          <FocusedPanel />
          <BcgColorConfig />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
