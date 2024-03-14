//installation----
//npm install -y
//npm install express
const express = require("express");
const bodyParser = require("body-parser"); //for post its required
const app = express();

app.use(express.json());
//without it it can;t read json data from request

var patients = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const numberOfKidney = patients[0].kidneys;
  const patientName = patients[0].name;
  console.log("name---" + patientName);
  console.log(numberOfKidney);
  const totalNumberOfKidney = patients[0].kidneys.length;
  console.log(totalNumberOfKidney);
  let totalHealthyKidney = 0;
  for (let i = 0; i < numberOfKidney.length; i++) {
    if (numberOfKidney[i].healthy == true) {
      totalHealthyKidney = totalHealthyKidney + 1;
    }
  }
  console.log("totalHealthyKidney    " + totalHealthyKidney);

  res.json({
    patientName,
    totalNumberOfKidney,
    totalHealthyKidney,
    //numberOfKidney,
  });
});

app.post("/post", function (req, res) {
  const isHealthy = req.body.isHealthy;
  patients[0].kidneys.push({
    healthy: isHealthy,
  });
  res.send("New Healthy Kidney Added!!!");
  //   res.json({
  //     msg: "New Healthy Kidney Added on patient" + patients[0].name,
  //   });
});

app.listen(3000, function () {
  //it will show in terminal console
  console.log(`Example app listening on port 3000`);
});
