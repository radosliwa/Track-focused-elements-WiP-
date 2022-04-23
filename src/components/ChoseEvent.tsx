import React, { useContext, useState } from "react";
import { Context } from "../store/AppProvider";
import { SelectField } from "./common/SelectField";
import { TOption } from "../types/types";

const PLACEHOLDER = "Choose target";
const HELPER_TEXT = "No target selected";

const options: TOption[] = [
  { label: "Event target", value: "event target" },
  { label: "Current target", value: "current target" },
];

export const ChoseEvent = () => {
  const { setTrackedTarget, trackedTarget } = useContext(Context);
  const [error, setError] = useState(false);
  const handleClickAway = () => {
    setError(!trackedTarget ? true : false);
  };

  return (
    <section className="chose-event">
      <SelectField error={error} label={PLACEHOLDER} value={trackedTarget} handleClickAway={handleClickAway} defaultValue={PLACEHOLDER} onChangeHandler={(e) => setTrackedTarget(e.target.value)} options={options} />
    </section>
  );
};


