# Anyfin - Amar Pai

coding sample for Anyfin

## Configurations

1. If you want to run the project in localhost then change React [Config](https://github.com/amarpai/anyfin-amar/blob/master/frontend/src/config/configs.js) file and replace amazonaws URL with localhost

2. If you want to login to AWS to check the implementation use [ppk](https://github.com/amarpai/anyfin-amar/blob/master/anyfin.ppk) key to login.

3. [Postman endpoint](https://github.com/amarpai/anyfin-amar/blob/master/getCountryDetails.postman_collection.json)

## API endpoints (port 4000)

API endpoint to fetch jwt token which is to be used for geting country Information

```bash
post http://ec2-3-85-238-57.compute-1.amazonaws.com:4000/api/v1/login
```

API endpoint to fetch country details with exchange rates to SEK

```bash
get http://ec2-3-85-238-57.compute-1.amazonaws.com:4000/api/v1/country/{{countryName}}

Required:  Headers Authorization : Bearer jwtToken

```

## React Application (port 3000)

Login page (as of now it's dummy and does not require username or password)

```bash
http://ec2-3-85-238-57.compute-1.amazonaws.com:3000/
```

```bash
http://ec2-3-85-238-57.compute-1.amazonaws.com:3000/#/dashboard
```

## NPM packages used.

1) underscore
2) axios
3) jsonwebtoken
4) express-rate-limit
5) pm2 (used to start app in AWS)


