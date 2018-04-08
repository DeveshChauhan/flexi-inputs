import React from "react";

// Components
import TextField from "./flexi-elements/TextField";
import DropDown from "./flexi-elements/DropDown";
import RadioBox from "./flexi-elements/RadioBox";

const Flexi = props => {
  return (
    <div className="flexi">
      <form onSubmit={props.onSubmit}>
        {props.config.items.map((item, index) => {
          // render input component according to the input type
          switch (item.type) {
            case "TextField":
              return (
                <TextField
                  key={index}
                  element={item}
                  handleInputChange={props.handleInputChange}
                />
              );
              break;
            case "DropDown":
              return (
                <DropDown
                  key={index}
                  element={item}
                  handleInputChange={props.handleInputChange}
                />
              );
              break;
            case "RadioBox":
              return (
                <RadioBox
                  key={index}
                  element={item}
                  handleInputChange={props.handleInputChange}
                />
              );
              break;
            default:
              return null;
              break;
          }
        })}
        <div className="flexi__group">
          <input
            className="flexi__btn flexi__btn--primary"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Flexi;