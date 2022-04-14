import React, { useContext } from "react";
import { Context } from "../store/AppProvider";
import { Select, MenuItem } from "@mui/material";

type TOption = {
  label: string;
  value: string;
};

const options: TOption[] = [
  { label: "Choose", value: "Choose" },
  { label: "Event target", value: "event target" },
  { label: "Current target", value: "current target" },
];

export const ChoseEvent: React.FC = () => {
  const { setTrackedTarget } = useContext(Context);

  return (
    <section className="chose-event">
      <h2>Chose target to track:</h2>
      <Select
        id="chose-event-select"
        defaultValue={"Choose"}
        onChange={(e) => setTrackedTarget(e.target.value as string)}
      >
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </section>
  );
};
