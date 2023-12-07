// --> Using While  loop

let arr2 = [2,74,7,9,3,3,5]

let result = 0
let i = 0
let lenOfarr2 = arr2.length
while(i < lenOfarr2){
	result = result + arr2[i]
	i++
}
console.log(`this is sum of arr2 :- ${result}`)