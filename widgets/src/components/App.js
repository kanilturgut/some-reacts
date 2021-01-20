import React from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";

const items = [
  {
    title: "What is react?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use react?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creationg components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Dropdown options={options} />
      </div>
    );
  }
}

export default App;
