import React, { useContext, useState } from "react";
import { Context } from "../store/AppProvider";
import { MenuItem, TextField } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";

type TOption = {
  label: string;
  value: string;
};

const PLACEHOLDER = "Choose target";
const HELPER_TEXT = "No target selected";

const options: TOption[] = [
  { label: "Event target", value: "event target" },
  { label: "Current target", value: "current target" },
];

const textFieldStyle = {
  width: "215px",
  boxShadow: 2,
  "& label, & label.Mui-focused": {
    color: "secondary.main",
    borderColor: "secondary.main",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset, &.Mui-focused fieldset": {
      borderColor: "secondary.main",
    },
    color: "secondary.main",
  },
};
export const ChoseEvent: React.FC = () => {
  const { setTrackedTarget, trackedTarget } = useContext(Context);
  const [error, setError] = useState(false);
  const handleClickAway = () => {
    if (!trackedTarget) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <section className="chose-event">
      <ClickAwayListener onClickAway={handleClickAway}>
        <TextField
          label="Choose target to track:"
          sx={textFieldStyle}
          select
          fullWidth
          error={error}
          value={trackedTarget}
          defaultValue={PLACEHOLDER}
          onBlur={handleClickAway}
          onChange={(e) => setTrackedTarget(e.target.value as string)}
        >
          {options.map((option) => (
            <MenuItem value={option.value} key={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </ClickAwayListener>
    </section>
  );
};
