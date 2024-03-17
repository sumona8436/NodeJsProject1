//to run this code in local server write "node index.js" command in console
const express = require("express");
const bodyParser = require("body-parser"); //for post its required
const app = express();
const port = 3000;

//function
function sum(n, m) {
  const num1 = parseInt(n);
  const num2 = parseInt(m);
  return num1 + num2;
}

app.get("/", function (req, res) {
  //hit localhost:3000 in chrome
  res.send("Hello World!nnnnnn");
});
app.get("/getdata", function (req, res) {
  res.json({
    Name: "Sumona",
    Age: "56",
    Gender: "Female",
  });
});

app.use(bodyParser.json());
app.post("/savedata", function (req, res) {
  console.log("request body>>>" + req.body);
  const { name, age } = req.body;
  // res.send(`Received data: ${JSON.stringify({ name, age })}`);
  res.send(`Received name: ${name}`);
});

app.get("/getSumFunction", function (req, res) {
  const num1 = req.query.n;
  const num2 = req.query.m;
  const ans = sum(num1, num2);
  res.send(ans.toString());
  //you have to pass value in url like this
  //http://localhost:3000/getSumFunction/?n=10&m=10
});

app.listen(port, function () {
  //it will show in terminal console
  console.log(`Example app listening on port ${port}`);
});
