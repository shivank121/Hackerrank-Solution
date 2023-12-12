let matrix = [
      [1,8,3],
      [4,5,6],
      [7,8,2]
]
let leftToRight = 0
let RightToLeft = 0

for(let row = 0 ; row < matrix.length; row++){
        leftToRight += matrix[row][row]
        RightToLeft += matrix[matrix.length - 1 -row][row]
    
}
console.log(Math.abs(leftToRight - RightToLeft))

