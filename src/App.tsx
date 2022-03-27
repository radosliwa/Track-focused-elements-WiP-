import React from "react";

import { useState, useEffect } from "react";
import { ChoseEvent } from "./components/ChoseEvent";
import { FocusedPanel } from "./components/FocusedPanel";
import { BcgColorConfig } from "./components/BcgColorConfig";
import "./App.css";

function App() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [response, setResponse] = useState("");

  const handleSelectedEvent = (event: Event): void => {
    const emittedValue = (event.target as HTMLSelectElement).value;
    setSelectedEvent(emittedValue);
  };

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id as number, { greeting: "hello" }, function (response) {
        console.log("response: ", response?.farewell ?? "no response");
        setResponse(response?.farewell ?? "no response");
      });
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Track Focused Element</h1>
      </header>
      <p>{selectedEvent}</p>
      <p>{response}</p>
      <main>
        <ChoseEvent emitEvent={handleSelectedEvent} />
        <FocusedPanel />
        <BcgColorConfig />
      </main>
    </div>
  );
}

export default App;
