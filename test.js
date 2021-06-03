// function char_count(char, strings) {
//     let counter = 0;
//     let x=0
//     while ( x < char.length) {
//       if (char.charAt(x) == strings) {
//         counter += 1;
//       }
//       x++
//     }
//     return counter;
    
//   }
  
//   console.log(char_count("lailaaa", "i"));

let a= [1, 2, 4, 3, 2, 1, 4]
const uniqueSort=(num)=> num.sort().reverse().filter((valu,index)=>num.indexOf(valu)===index)
console.log(uniqueSort(a))

 
 