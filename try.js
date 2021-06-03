 
// function isOdd(n) {
//     // Your code here
//     if(n % 2 === 0)
//      return false 
//     return true
//   }
//   isOdd(10)
// function squareOrDouble(n) {
//     if((n % 2) ===0 ){
//         return n*2
//     }
//     else{
//         return n*n
//     }
// }
// squareOrDouble(10)
function oddsSmallerThan(n) {
    let count =0
    // Your code here
    if((n % 2) ===0){
        return 0
    }
    else{
        for (let i = 0; i < n; i++) {
            count++;
          }
          return count
    }
  }
  oddsSmallerThan(7)