var ml = require('machine_learning');
var Stocks = require('stocks.js');

import regression from 'regression';

var stocks = new Stocks('20G2AJCJQ55HC808');
var stocksymbols = ["AAPL","TSLA","MSFT","GOOG","AMZN","FB","BRK-A","BABA","JNJ","JPM","XOM"];

console.log(stocksymbols);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Which Stock would you like?`, (name) => {
    request(name);

  })

  async function request (n) {
    var result = await stocks.timeSeries({
      symbol: n,
      interval: 'weekly',
      amount: 26
     });
  
     console.log(`Here are ${n}'s stock values: `, result);
  }
  
 
// var x = [[-10],[-9],[8],[14],[12]];
// var y = [[-5],[-4.5],[4],[7],[6]];

// function normalizeArray(input,min=0,max=25){
//     var a = input;
//     var array=[];
//     var ratio = max;
//     for 
//     (var i in a){
//         array[i] = [(a[i]/ratio)];

//     }



    

//     return array;
// }

// x = normalizeArray(x),y = normalizeArray(y);
// var classifier = new ml.LogisticRegression({
//     'input' : x,
//     'label' : y,
//     'n_in' : 1,
//     'n_out' : 1
// });

// classifier.set('log level',1);

// var training_epochs = 4000, lr = 0.01;

// classifier.train({
//     'lr' : lr,
//     'epochs' : training_epochs
// });

// x = [[1],[0]];
// console.log(x);
// console.log("Result : ",classifier.predict(x));