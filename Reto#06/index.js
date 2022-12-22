function createCube (size) {
  const tF = '/\\'
  const bF = '\\/'
  const topFace = '_\\'.repeat(size)
  const bottomFace = '_/'.repeat(size)

  let topHalfBox = ''

  for (let i = 1; i <= size; i++) {
    topHalfBox += ' '.repeat(size - i) + tF.repeat(i) + topFace + '\n'
  }

  const bottomHalfBox = topHalfBox
    .replaceAll(tF, bF)
    .replaceAll(topFace, bottomFace)
    .split('\n')
    .reverse()
    .toString()
    .replace(',', '')
    .replaceAll(',', '\n')

  return topHalfBox + bottomHalfBox
}

console.log(createCube(1))
