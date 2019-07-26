var DecisionTree = require('decision-tree');
const csvtojsonV2=require("csvtojson");
const express = require('express')
var bodyParser = require('body-parser');

var cors = require('cors')
var faker = require("faker");
var app = express()
var dt;
app.use(cors())
const port = 3000// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });
  app.get("/user", function (req, res) {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  });
  app.post('/other', function (req, res) {
    var data = ({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email()
      });
      var test = dt.predict((req.body));
      console.log(test)
      data = {effect: test};
      res.status(200).send(data);
  })

const csvFilePath='./public/MOCK_DATA.csv'

csvtojsonV2()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    var training_data= jsonObj;

    var class_name = "effect";

    var features = ["close","newProduct","newCLevel","scandal","naturalDisaster","newComp"
    ];
    var test_data = [{volume:33333,close:23,newProduct:false,newCLevel:false,scandal:false,naturalDisaster:false,newComp:false,effect:true},{volume:24444,close:2,newProduct:false,newCLevel:false,scandal:true,naturalDisaster:true,newComp:false,effect:false}];
     dt = new DecisionTree(training_data, class_name, features);
    
    var treeModel = dt.toJSON(); 
})