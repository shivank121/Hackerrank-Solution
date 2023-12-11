let arr = [-4, 3, -9, 0, 4, 1]


const positive = arr.filter((Element)=>{
    return Element > 0
})
console.log((positive.length/arr.length).toFixed(6))

const negative = arr.filter((Element)=>{
    return Element < 0
})
console.log((negative.length/arr.length).toFixed(6))

const zero = arr.filter((Element)=>{
    return Element = 0
})
console.log((zero.length/arr.length).toFixed(6))

