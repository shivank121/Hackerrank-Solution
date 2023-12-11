let matrix = [
      [1,2,3],
      [4,5,6],
      [7,8,9]
]
let leftToRight = 0
let RightToLeft = 0
for(let row = 0 ; row < matrix.length; row++){
    for(let col = row ; col == row; col++){
        leftToRight += matrix[row][col]
    }
}

for(let row = 0 ; row < matrix.length; row++){
    RightToLeft += matrix[matrix.length - 1 -row][row]
}

console.log(leftToRight - RightToLeft)

