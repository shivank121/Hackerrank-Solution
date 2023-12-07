// --> Using For loop
 
let arr1 = [1,3,4,5]
let sum = 0
for(let i = 0; i < arr1.length ; i++ ){
  sum += arr1[i]                           //Note  ->     this is important ( use of " += " operater) 
}
console.log(`this is sum of arr1 :- ${sum}`)