 
const prompt = require('prompt-sync')({sigint: true});
// const FibonacciChecker=(num)=> {
//     let x = [0, 1],
//       i = 1,
//       y;
//     for (i; i <= num; i = x[y - 1] + x[y]) {
//       x.push(i);
//       y = x.length - 1;
//     }
//     return x[y] === num;
//   }
//   console.log(FibonacciChecker(1));
// let n = 9;
// function fib(n) {
//     if (n <= 1)
//         return n;
//     return fib(n-1) + fib(n-2);
// }

 
// const FibonacciChecker=(num)=> {
//     let x=prompt("Enter num")
//     if(fib(num)===x)return"true"
//     return"false"
// }
// console.log(FibonacciChecker(34))
const FibonacciChecker = (num, count = 1, last = 0) => {
    if (count < num) {
      return FibonacciChecker(num, count + last, count);
    }
    if (count === num) {
      return true;
    }
    return false;
  };
  console.log(FibonacciChecker(8));
  console.log(FibonacciChecker(55));
  console.log(FibonacciChecker(89));
  console.log(FibonacciChecker(377))