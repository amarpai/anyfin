import React, { Component } from "react";
import "./dashboard.css";
import TableCountryComponent from "../../components/country/tableCountryComponent";
import SearchCountryComponent from "../../components/country/searchCountryComponent";
import ConvertSekComponent from "../../components/country/convertSekComponent";
import axios from "axios";
import { configurations } from "../../config/configs";
import { _ } from "underscore";

export default class dashboardContainer extends Component {
  state = {
    data: []
  };

  onDeleteHandler = data => {
    this.setState({
      data: this.state.data.filter(x => x.name != data)
    });
  };

  _handleOnSearch = e => {
    e.persist();
    if (e.key == "Enter") {
      const bearerToken = axios
        .post(configurations.jwtTokenApi.endpoint)
        .then(response => {
          if (response.data.token) {
            const config = {
              headers: {
                Authorization: "bearer " + response.data.token
              }
            };
            axios
              .get(configurations.countryApi.endpoint + e.target.value, config)
              .then(response => {
                if (response.data.length > 0) {
                  this.setState({
                    data: [...this.state.data, ...response.data]
                  });
                } else {
                  alert(configurations.countryApi.errorMsg);
                }
              })
              .catch(error => {
                alert(configurations.jwtTokenApi.errorMsg);
              });
          } else {
            alert(configurations.jwtTokenApi.errorMsg);
          }
        })
        .catch(error => {
          alert(configurations.countryApi.errorMsg);
        });
    }
  };

  _handleConverSEK = e => {
    if (e.key == "Enter") {
      if (this.state.data.length <= 0) {
        alert(configurations.countryApi.convertError);
      } else {
        this.setState({
          data: [
            ..._.map(this.state.data, function(list) {
              return _.extend(list, {
                totalValue:
                  e.target.value / list.currencies[0].exchangeRateToSek
              });
            })
          ]
        });
      }
    }
  };

  render() {
    return (
      <div className="listing">
        <SearchCountryComponent _handleOnSearch={this._handleOnSearch} />
        <ConvertSekComponent _handleConverSEK={this._handleConverSEK} />
        <TableCountryComponent
          data={this.state.data}
          onDeleteHandler={this.onDeleteHandler}
        />
      </div>
    );
  }
}
