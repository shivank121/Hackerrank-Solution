// --> Using ForEach Method:

let arr3 = [1,2,3,4,5,6,7,8,9,0]
let resultOFArr3 = 0  // --> here work proper

arr3.forEach((element)=>{
	// let resultOFArr3 = 0   --> If declare this here than then i got only all elemnt of arr3 rether then total sum
	resultOFArr3 += element
})
console.log(`this is addition of arr3  ${resultOFArr3}`)