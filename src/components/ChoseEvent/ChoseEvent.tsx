import React from "react";
import PropTypes, { InferProps } from "prop-types";

type TOption = {
  label: string;
  value: string;
};

const options: TOption[] = [
  { label: "Select tracking trigger", value: "" },
  { label: "Click", value: "click" },
  { label: "Keypress", value: "keypress" },
];

const ChoseEventPropTypes = {
  emitEvent: PropTypes.func.isRequired,
};

export const ChoseEvent = ({ emitEvent }: InferProps<typeof ChoseEventPropTypes>) => {
  // get selected value

  return (
    <section className="chose-event">
      <h2>Chose Event</h2>
      <p>
        <select onChange={(e) => emitEvent(e)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </p>
    </section>
  );
};
