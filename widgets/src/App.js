import React, { useState } from "react";
import Translate from "./components/Translate";

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

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
