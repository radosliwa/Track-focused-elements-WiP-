import React from "react";
import { useContext, useEffect, useState } from "react";
import { ChoseEvent } from "./components/ChoseEvent";
import { FocusedPanel } from "./components/FocusedPanel";
import { BcgColorConfig } from "./components/BcgColorConfig";
import "./App.css";
// UI
import { CssBaseline } from "@mui/material";
import { Context } from "./store/AppProvider";

const App: React.FC = () => {
  const value = useContext(Context);

  console.log("value in app", value);
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
    <>
      <CssBaseline />
      <div id="App">
        <header className="App-header">
          <h1>Track Focused Element!</h1>

          <p>{JSON.stringify(value)}</p>
        </header>
        <main>
          <ChoseEvent />
          <FocusedPanel />
          <BcgColorConfig />
        </main>
      </div>
    </>
  );
};

export default App;
