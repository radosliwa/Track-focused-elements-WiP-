import React, { useCallback, useState } from "react";
import "./BcgColorConfig.scss";

export const BcgColorConfig = () => {
  const [selectedOption, setSelectedOption] = useState("red");
  const [isOpen, setIsOpen] = useState(false);
  console.log("BcgColorConfig");

  const options: Record<"label" | "value", string>[] = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
  ];

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
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
        {!isOpen && <li>{selectedOption}</li>}
        {isOpen &&
          options.map((option) => (
            <li
              key={option.value}
              className={selectedOption === option.value ? "color-item-active" : "color-item"}
              onClick={() => onOptionClicked(option.value)}
            >
              {option.label}
            </li>
          ))}
      </ul>
    </section>
  );
};
