import React, { Component } from "react";
import ListCountryComponent from "../../components/country/listCountryComponent";
import { configurations } from "../../config/configs";

export default class TableCountryComponent extends Component {
  renderCountry = (content, index) => {
    return (
      <ListCountryComponent
        {...content}
        key={index}
        onDeleteHandler={this.props.onDeleteHandler}
      />
    );
  };

  renderHeader = (content, index) => {
    return <th key={index}>{content}</th>;
  };

  render() {
    return (
      <table align="center">
        <thead>
          <tr>
            {configurations.countryApi.tableHeaders.map(this.renderHeader)}
          </tr>
        </thead>
        <tbody>{this.props.data.map(this.renderCountry)}</tbody>
      </table>
    );
  }
}
