//installation----
//npm install -y
//npm install express
const express = require("express");
const zod = require("zod"); //for input verification
const bodyParser = require("body-parser"); //for post its required
const app = express();

//without it it can;t read json data from request
app.use(express.json());

//its a schema type
const z = zod.array(zod.number());
//like,if you do like this it will only check that its string or not
// const mySchema = z.string();

// // parsing
// mySchema.parse("tuna"); // => "tuna"
// mySchema.parse(12); // => throws ZodError

// // "safe" parsing (doesn't throw error if validation fails)
// mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
// mySchema.safeParse(12); // => { success: false; error: ZodError }

//local database
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

//middlewares
function authenticationCheck(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "sumona" && password != "123") {
    res.status(400).send("Wrong Username or Password");
  } else {
    next();
  }
  //its used for pre-checks
  //if positve result comes,then only next function will call
  //either it will return error status
  //here next() is another method.That will takes the control to final function
}

app.get("/", authenticationCheck, function (req, res) {
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
  if (patients[0].kidneys.length < 2) {
    const isHealthy = req.body.isHealthy;
    if (isHealthy) {
      patients[0].kidneys.push({
        healthy: isHealthy,
      });
      res.send("New Healthy Kidney Added!!!");
      //   res.json({
      //     msg: "New Healthy Kidney Added on patient" + patients[0].name,
      //   });
    } else {
      res.status(411).send("You can't ADD Unhealthy Kidney,Give TRUE Value");
    }
  } else {
    res.status(411).send("You already have two kidneys,You can't add Kidney");
  }
});
app.put("/post", function (req, res) {
  if (!checkingForUnhealtyKidney) {
    for (let i = 0; i < patients[0].kidneys.length; i++) {
      patients[0].kidneys[i].healthy = true;
    }
    res.json({});
  } else {
    res.status(411).send("You Have not any Unhealthy Kidney to REPLACE");
  }
});

app.delete("/delete", function (req, res) {
  if (!checkingForUnhealtyKidney) {
    const newKidneyArray = [];
    for (let i = 0; i < patients[0].kidneys.length; i++) {
      if (patients[0].kidneys[i].healthy == true) {
        newKidneyArray.push({
          healthy: true,
        });
      }
    }
    patients[0].kidneys = newKidneyArray;
    res.json({});
  } else {
    res.status(411).send("You Have not any Unhealthy Kidney to REMOVE");
  }
});

//
//global catches
//its a middleware that helps to detect error,have four argument
app.use((error, req, res, next) => {
  // console.log(error); //print error for debugging
  res.status(500).send("An Internal Server error occured!!!!1");
});
app.listen(3000, function () {
  //it will show in terminal console
  console.log(`Example app listening on port 3000`);
});
function checkingForUnhealtyKidney() {
  const flag = true;
  for (let i = 0; i < patients[0].kidneys.length; i++) {
    if (patients[0].kidneys[i].healthy == false) {
      flag = false;
    }
  }
  return flag;
}
