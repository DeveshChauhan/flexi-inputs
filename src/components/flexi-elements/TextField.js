import React from "react";

// Components
import Label from "./Label";

const TextField = props => {
  return (
    <div className="flexi__group">
      <Label label={props.element.label} />
      <input
        className="flexi__input"
        type="text"
        name={props.element.name}
        onChange={props.handleInputChange}
      />
    </div>
  );
};

export default TextField;
