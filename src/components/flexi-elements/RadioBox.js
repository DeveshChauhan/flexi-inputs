import React from "react";

// Components
import Label from "./Label";

const RadioBox = props => {
  return (
    <div className="flexi__group">
      <Label label={props.element.label} />
      {props.element.values.map((option, index) => (
        <div key={index} className="flexi__radiobox">
          <input
            id={`radio-${props.element.name}-${index}`}
            type="radio"
            name={props.element.name}
            onChange={props.handleInputChange}
            value={option}
          />
          <label htmlFor={`radio-${props.element.name}-${index}`}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioBox;
