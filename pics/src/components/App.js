import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);

    axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 5HYlPZshDHJ1nCVJu9fIKQb7nHzexbz8E6fu-oddqs8",
      },
      params: {
        query: term,
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitFromSearch={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
