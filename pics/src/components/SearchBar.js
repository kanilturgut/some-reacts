import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // use arrow function to automatically call bind()
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmitFromSearch(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
