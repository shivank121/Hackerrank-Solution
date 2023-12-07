let triplet1 = [1,5,5,3]
let triplet2 = [1,4,7,1]
let forTriplet1 = 0
let forTriplet2 = 0

let finalResult = []

for(let i = 0; i < triplet1.length ; i++){
      for(let j = i ; j <= i ; j++){
            if(triplet1[i] > triplet2[j]){
                  forTriplet1 += 1
            }else if(triplet1[i] < triplet2[j]){
                  forTriplet2 += 1
            }else if(triplet1[i] = triplet2[j]){
                  forTriplet1 += 0
                  forTriplet2 += 0
            }
      }
}
finalResult.push(forTriplet1, forTriplet2)

console.log(finalResult)