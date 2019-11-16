import React, { Component } from "react";

export default class ListCountryComponent extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.population}</td>
        <td>{this.props.currencies[0].name}</td>
        <td>{this.props.currencies[0].exchangeRateToSek}</td>
        <td>{this.props.totalValue}</td>
        <td onClick={() => this.props.onDeleteHandler(this.props.name)}>X</td>
      </tr>
    );
  }
}
