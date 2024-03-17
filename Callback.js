function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function sumOfNumWithOperation(a, b, calllbackFunc) {
  var c = calllbackFunc(a);
  var d = calllbackFunc(b);
  return c + d;
}
console.log(sumOfNumWithOperation(2, 2, cube));

//Anonymous call back(here we can pass a whole function in argument)
function sumOfNumWithOperation(a, b, anonymouscalllbackFunc) {
  var c = anonymouscalllbackFunc(a);
  var d = anonymouscalllbackFunc(b);
  return c + d;
}
console.log(
  sumOfNumWithOperation(2, 2, function (n) {
    return n * n;
  })
); //output:8
