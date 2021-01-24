import React, { useState } from "react";

const SearchBar = ({ onSubmitFromSearch }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmitFromSearch(term);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
