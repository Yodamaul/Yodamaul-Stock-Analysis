
var Normalizer=require("./normalizer.js");
var synaptic = require('synaptic');
const csvtojsonV2=require("csvtojson");

const csvFilePath='./public/eurusd.csv'

csvtojsonV2()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    var dataClean= jsonObj;
    var  normalizer = new Normalizer.Normalizer(dataClean);
    // setting required options and normalize the data
    normalizer.setOutputProperties(['CLOSE']);
    normalizer.normalize();
    
    // find useful information about your data
    // to pass to your neural network
    var nbrInputs = normalizer.getInputLength();
    var nbrOutputs = normalizer.getOutputLength();
    
    var metadata = normalizer.getDatasetMetaData();
    var inputs = normalizer.getBinaryInputDataset();
    var outputs = normalizer.getBinaryOutputDataset();
    
    
    var dataobj=[];
    
     var input = 3;
     var pool = 70;
     var output = 1;
     var connections = 900;
     var gates = 14;
     var myPerceptron = new synaptic.Architect.Perceptron(3, 10,15, 7, 20, 10, 1);
     var trainer = new synaptic.Trainer(myPerceptron);
     
     for (var i in inputs) {
         dataobj[i] = {input:inputs[i],output:outputs[i]};
     }
    
     trainer.train(dataobj);
    
     console.log(trainer.test(dataobj));
    
     var exported = myPerceptron.toJSON();
     var data= JSON.stringify(exported);
     var d=new Date();
     var t=d.getTime();
     var fs = require('fs');
     fs.writeFile(t+'.json', data, 'utf8', function(){console.log("done")});
    
})  
