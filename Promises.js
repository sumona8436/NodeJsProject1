// 1. What is callback hell?
// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
// Every callback depends/waits for the previous callback,
// thereby making a pyramid structure that affects the readability and maintainability of the code.
//Example:After every one second 1 line will print
setTimeout(function () {
  console.log("First timeout");
  setTimeout(function () {
    console.log("Second timeout");
    setTimeout(function () {
      console.log("Third timeout");
    }, 3000);
  }, 2000);
}, 1000); //How to overcome this process----
//APPROACH 1- using asynchronys function
function mySetTimeoutfunction(callback, duration) {
  setTimeout(callback, duration);
}
mySetTimeoutfunction(function () {
  //calling function
  console.log("calling set time out");
}, 1000);

//APPROACH 2- using Promises
// 2. What is promises?
//A synthetical approach of Asynchronous Function.Promise is a inbuild class of JS.
function mySetTimeoutfunction(duration) {
  const p = new Promise(function (resolve) {
    //this is promise syntax
    //A promise expect its first argument a function and
    //that function expect resolve as a first argument
    setTimeout(resolve, duration);
  });
  return p;
}
const ans = mySetTimeoutfunction(1000); //calling function
ans.then(function () {
  console.log("calling set time out");
});

//3.Difference Between ASYNCHRONYAS CALL & PROMISES
//Asynchronys call will accept a function or a callback as an parameter and this call will not return anything.
//Promises will accept only duration as a prameter no callback will need as a parameter.
//It will return the instance of promise class.
//
//
//
//DIFFERENT TYPES SYNTAX OF PROMISE
//....................................................................
//
const promise1 = new Promise(function (resolve, reject) {
  //Do Asynchronys Operation,like
  //DB operation,Cryptography,Network call
  resolve();
  //u have to call resolve(),either .then function will not call
});
promise1.then(function () {
  //this part directly connected with resolve
  console.log("under resolve");
});
//
//
//
//
//
//
new Promise(function (resolve, reject) {
  //any operation
  resolve();
}).then(function () {
  console.log("under resolve");
});
//
//
//
//
//
//
//
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("under setTimeout");
    //passing parameter in resolve,it will reflect as object
    resolve({ UserName: "Sumona", Address: "Kharagpur" });
  }, 3000);
});
promise3.then(function (param) {
  console.log(param);
});
//
//
//
//
//
//
//
const promise4 = new Promise(function (resolved, reject) {
  setTimeout(function () {
    let error = false;
    if (error) {
      reject();
    } else {
      resolved({ userName: "Damu", Location: "Ethyopia" });
    }
  }, 3000);
});
promise4
  .then(function (response) {
    console.log(response);
    //console.log(response.userName);
    return response.userName;
  })
  .then((userName) => {
    console.log(userName);
    //if you return some value in before .then,then that value will cathch by this .then
    //its call promise chainning
    //without return it will give undefined value
  })
  .catch(function () {
    console.log("under catch section");
  })
  .finally(() => console.log("finally block executed")); //we can write like this also,without fn
//
//
//
//
//
//
//
//
//Async Await Function
const promise5 = new Promise(function (resolved, reject) {
  setTimeout(function () {
    let error = false;
    if (error) {
      reject("No Data Found");
    } else {
      resolved({ userName: "jamuna", Location: "London" });
    }
  }, 1000);
});
async function consumepromise5() {
  //you have to write code under try catch block
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromise5();
//
//
//
//
//
//
//
//
//
