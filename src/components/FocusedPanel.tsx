import React, { useContext } from "react";
import "./FocusedPanel.scss";
import { Box } from "@mui/material";
import { Context } from "../store/AppProvider";
import { useEffect, useState, useRef } from 'react';

// focused panel styles
const focusedPanelStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "secondary.main",
  width: "200px",
  height: "200px",
  borderRadius: "5%",
  border: '2px solid #fff'
};

export const FocusedPanel = () => {
  const { trackedTargetBcgColor } = useContext(Context);
  return (
    <section className="focused-panel">
      <h2>FOCUSED ELEMENT:</h2>

      <Box sx={{ ...focusedPanelStyle, ...{ border: `2px solid ${trackedTargetBcgColor}` } }}></Box>
    </section>
  );
};
