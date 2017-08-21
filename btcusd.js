const request = require('request');
const currency = require('currency-formatter');
const url = 'https://www.bitstamp.net/api/ticker/';

request(url, function(error, response, body) {
  if(!error && response.statusCode === 200) {
    const resultJSON = JSON.parse(body);
    console.log(currency.format(resultJSON.last, {code: 'USD'}));
  } else {
    console.log('-');
  }
});
