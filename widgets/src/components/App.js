import React from "react";
import Accordion from "./Accordion";
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

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
