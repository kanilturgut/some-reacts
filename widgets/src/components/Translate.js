import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

export default () => {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        pageTitle="Select a Language"
        options={options}
        selected={selectedLanguage}
        onSelectedChange={setSelectedLanguage}
      />
    </div>
  );
};
