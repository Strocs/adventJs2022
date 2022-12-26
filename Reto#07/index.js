const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']


function getGiftsToRefill (a1, a2, a3) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    a => +a1.includes(a) + +a2.includes(a) + +a3.includes(a) === 1
  )
}

console.log(getGiftsToRefill(a1, a2, a3)) // ['muñeca', 'pc']
console.log(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])) // ["a", "b", "c"]
console.log(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])) // [  "a",  "b",  "c",  "d",  "e",  "f"]
