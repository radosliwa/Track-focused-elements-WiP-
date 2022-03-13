import React from "react";

import { useState } from "react";
import { ChoseEvent } from "./components/ChoseEvent/ChoseEvent";
import { FocusedPanel } from "./components/FocusedPanel/FocusedPanel";
import "./App.css";
function App() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const handleSelectedEvent = (event: Event): void => {
    const emittedValue = (event.target as HTMLSelectElement).value;
    setSelectedEvent(emittedValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Track Focused Element</h1>
      </header>
      <main>
        <ChoseEvent emitEvent={handleSelectedEvent} />
        <FocusedPanel />
      </main>
    </div>
  );
}

export default App;
