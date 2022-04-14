import React, { useContext, useState } from "react";
import { Context } from "../store/AppProvider";
import "./BcgColorConfig.scss";

const options: Record<"label" | "value", string>[] = [
  { label: "red", value: "red" },
  { label: "green", value: "green" },
  { label: "blue", value: "blue" },
];
// type react funct
export const BcgColorConfig: React.FC = () => {
  const { setTrackedTargetBcgColor, trackedTargetBcgColor } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);

  const onOptionClicked = (value: string) => {
    setTrackedTargetBcgColor(value);
    setIsOpen(false);
  };

  return (
    <section className="background-config">
      <p>Select background color:</p>
      <ul
        className={`background-colors-list ${isOpen ? "opened" : ""}`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {!isOpen && <li>{trackedTargetBcgColor}</li>}
        {isOpen &&
          options.map((option) => (
            <li
              key={option.value}
              className={trackedTargetBcgColor === option.value ? "color-item-active" : "color-item"}
              onClick={() => onOptionClicked(option.value)}
            >
              {option.label}
            </li>
          ))}
      </ul>
    </section>
  );
};
