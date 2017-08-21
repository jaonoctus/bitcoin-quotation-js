const request = require('request');
const currency = require('currency-formatter');
const url = 'https://bittrex.com/api/v1.1/public/getticker?market=btc-neo';

request(url, function(error, response, body) {
  if(!error && response.statusCode === 200) {
    const resultJSON = JSON.parse(body);
    console.log(currency.format(resultJSON.result.Last, {
      symbol: '฿',
      thousand: ',',
      decimal: '.',
      precision: 8,
      format: '%s %v'
    }));
  } else {
    console.log('-');
  }
});
