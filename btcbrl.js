const request = require('request');
const currency = require('currency-formatter');
const url = 'https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC';

request(url, function(error, response, body) {
  if(!error && response.statusCode === 200) {
    const resultJSON = JSON.parse(body);
    console.log(currency.format(resultJSON.last, {code: 'BRL'}));
  } else {
    console.log('-');
  }
});
