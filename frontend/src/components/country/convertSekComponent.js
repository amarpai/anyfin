import React, { Component } from "react";

export default class ConvertSekComponent extends Component {
  render() {
    return (
      <div className="block2">
        <input
          type="text"
          name="firstname"
          onKeyDown={this.props._handleConverSEK}
          placeholder="Enter amount in SEK.."
        />
      </div>
    );
  }
}
