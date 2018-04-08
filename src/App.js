import React, { Component } from "react";

// Components
import Flexi from "./components/Flexi";

// CSS
import "./css/Flexi.css";

const flexiConfig = {
  items: [
    {
      name: "personfname",
      label: "Person's First Name",
      type: "TextField"
    },
    {
      name: "personlname",
      label: "Person's Last Name",
      type: "TextField"
    },
    {
      name: "gender",
      label: "Gender",
      type: "RadioBox",
      values: ["Male", "Female"]
    },
    {
      name: "course",
      label: "Course",
      type: "DropDown",
      values: [
        "Computer Science",
        "Electronics & Communication",
        "Information Technology",
        "Mechanical",
        "Other"
      ]
    },
    {
      name: "states",
      label: "Person's state",
      type: "DropDown",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};

class App extends Component {
  onFlexiSubmit = event => {
    event.preventDefault();
    console.log("Flexi submit", this.state);
    // validation required here

    // return formdata as javascript object eg.
    // {
    //   "personfname": "Devesh",
    //   "personlname": "Chauhan",
    //   "gender": "Male",
    //   "course": "Computer Science",
    //   "states": "Maharashtra"
    // }
    return this.state;
  };

  // handle onChange event on input elements
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // set state with input name and value
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Flexi
        onSubmit={this.onFlexiSubmit}
        config={flexiConfig}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}

export default App;