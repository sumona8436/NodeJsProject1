//map -> when you need to transform a array or need to do any operation on array then we use map
//internal Work
//map(arr,func)
const arr = [1, 2, 3, 4];
//want output like[2,4,6,8]
function transform(n) {
  return n * 2;
}
const ans = arr.map(transform);
console.log(ans);

//filter
//I want all even number from an array
const arr1 = [1, 7, 4, 2, 6, 0];
function logic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const anss = arr1.filter(logic);
console.log(anss);

//
//string.startsWith()
console.log("sumona".startsWith("s")); //output: true

//
