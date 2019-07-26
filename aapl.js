var ml = require('machine_learning');
var Stocks = require('stocks.js');

var stocks = new Stocks('20G2AJCJQ55HC808');
var st = "AAPL";
var fullData = [];
var calls = 0;

  async function request () {
      calls++;
    var result = await stocks.timeSeries({
      symbol: st,
      interval: 'weekly',
      amount: 26
     });
  
     console.log(`Here are ${st}'s stock values: `, result);
     calls--;
  }

  async function requestIndicator () {
    calls++;
    var options = {
        symbol: 'NOK',
        interval: '60min',
        amount: 24,
        time_period: 3,
        indicator: 'ADX'
      };
    var result = await stocks.technicalIndicator(options);
      console.log(request);
   calls--;
}


requestIndicator();

  
 