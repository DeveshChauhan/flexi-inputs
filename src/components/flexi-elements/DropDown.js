import React from "react";

// Components
import Label from "./Label";

const DropDown = props => {
  return (
    <div className="flexi__group">
      <Label label={props.element.label} />
      <select
        className="flexi__select"
        type="text"
        name={props.element.name}
        onChange={props.handleInputChange}
      >
        <option value="">Select {props.element.label}</option>
        {props.element.values.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
