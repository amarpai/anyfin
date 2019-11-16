export const configurations = {
  countryApi: {
    endpoint:
      "http://ec2-3-85-238-57.compute-1.amazonaws.com:4000/api/v1/country/",
    errorMsg: "Someting went wrong... We're sorry, can you try again.",
    tableHeaders: [
      "Country Name",
      "Population",
      "Currency",
      "Rate to SEK",
      "Total value in exg for SEK",
      "Delete"
    ],
    convertError: "Please select a country first"
  },
  jwtTokenApi: {
    endpoint:
      "http://ec2-3-85-238-57.compute-1.amazonaws.com:4000/api/v1/login",
    errorMsg: "Someting went wrong while fetching token.."
  }
};
