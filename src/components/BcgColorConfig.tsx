import React, { useContext, useState } from "react";
import { Context } from "../store/AppProvider";
import { SelectField } from "./common/SelectField";

const options: Record<"label" | "value", string>[] = [
  { label: "red", value: "red" },
  { label: "green", value: "green" },
  { label: "blue", value: "blue" },
];
const PLACEHOLDER = "Select background color";
// type react funct
export const BcgColorConfig = () => {
  const { setTrackedTargetBcgColor, trackedTargetBcgColor } = useContext(Context);
  const [fieldColor, setFieldColor] = useState({
    "& .MuiOutlinedInput-root": {
      "& fieldset, &.Mui-focused fieldset": {
        borderColor: "secondary.main",
      },
      color: "secondary.main",
    }
  });
  const changeFieldBcgColor = (color: string): void => {
    setFieldColor({
      "& .MuiOutlinedInput-root": {
        "& fieldset, &.Mui-focused fieldset": {
          borderColor: color,
        },
        color: "secondary.main",

      }
    })
  }
  const onOptionClicked = (value: string) => {
    setTrackedTargetBcgColor(value);
    changeFieldBcgColor(value);
  };

  return (
    <section className="background-config">
      <p>Select background color:</p>
      <SelectField label='Select background color' value={trackedTargetBcgColor} handleClickAway={() => { }} defaultValue={PLACEHOLDER} onChangeHandler={(e) => onOptionClicked(e.target.value)} options={options} styles={fieldColor} />
    </section>
  );
};
