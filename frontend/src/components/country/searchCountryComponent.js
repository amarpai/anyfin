import React, { Component } from "react";

export default class SearchCountryComponent extends Component {
  render() {
    return (
      <div className="block1">
        {" "}
        <input
          className="center-block"
          type="text"
          name="search"
          onKeyDown={this.props._handleOnSearch}
          placeholder="Search.."
        />
      </div>
    );
  }
}
