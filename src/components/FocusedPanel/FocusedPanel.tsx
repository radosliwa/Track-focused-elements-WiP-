import React from "react";

export const FocusedPanel = () => {
  return (
    <section className="focused-panel">
      <h2>FOCUSED ELEMENT:</h2>
      <textarea className="focused-panel__textarea" placeholder="Type something..." rows={10} cols={50} />
    </section>
  );
};
