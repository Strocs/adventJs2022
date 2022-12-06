const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// function distributeGifts(packOfGifts, reindeers) {
//   let p = 0
//   let c = 0
//   packOfGifts.forEach(g => p += g.length)
//   reindeers.forEach(r => c += r.length * 2)

//   return Math.floor(c / p)
// }

function distributeGifts(packOfGifts, reindeers) {
  let p = packOfGifts.join('').length
  let c = reindeers.join('').length * 2
  return Math.floor(c / p)
}


const result = distributeGifts(packOfGifts, reindeers)
console.log(result);