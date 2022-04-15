import React from "react";
import "./FocusedPanel.scss";
import { Box } from "@mui/material";

// focused panel styles
const focusedPanelStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "secondary.main",
  width: "200px",
  height: "200px",
  border: "1px solid secondary.main",
};

export const FocusedPanel = () => {
  return (
    <section className="focused-panel">
      <h2>FOCUSED ELEMENT:</h2>
      <Box sx={focusedPanelStyle}></Box>
    </section>
  );
};
