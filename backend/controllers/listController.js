var axios = require("axios");
var _ = require("underscore");
var config = require("../configs/config.json");
var jwt = require("jsonwebtoken");

exports.getCountryDetails = function(req, res) {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      var countryName = req.query.name ? req.query.name : req.params.name;

      axios
        .all([
          axios.get(config.countryApi.endpoint + countryName),
          axios.get(
            config.ratesApi.endpoint +
              "?access_key=" +
              config.ratesApi.accessKey
          )
        ])
        .then(
          axios.spread((country, rates) => {
            if (country.data) {
              countryList = processCountriesArray(country.data, rates.data);
            }

            res.send(countryList);
          })
        )
        .catch(error => {
          res.send({ status: "error", msg: config.errorMsg });
        });
    }
  });
};

/**
 * Description: Process countires array to pick selected fields
 * Input: Country data (JSON), Exchange rate date (JSON)
 * Output: fotmatted country details (Array of json objects)
 */
function processCountriesArray(countryData, rateData) {
  countryList = _.map(countryData, function(list) {
    currencyWithRates = _.map(list.currencies, function(currency) {
      exchangeRate = calculateConversionRate(currency, rateData);
      return _.extend(currency, exchangeRate);
    });

    countryListWithRates = _.extend(list, currencyWithRates);

    return _.pick(
      countryListWithRates,
      config.countryApi.fields.field1,
      config.countryApi.fields.field2,
      config.countryApi.fields.field3,
      config.countryApi.fields.field4
    );
  });

  return countryList;
}

/**
 * Description: Calculate rates conversion to SEK( configurable)
 * Input: Country data (JSON), Exchange rate date (JSON)
 * Output: Object
 */
function calculateConversionRate(currency, rateData) {
  return (exchangeRate = {
    exchangeRateToSek:
      currency.code != "EUR"
        ? rateData.rates[currency.code] / rateData.rates[config.base]
        : rateData.rates[config.base]
  });
}
