function fitsInOneBox (boxes) {
  const o = boxes.sort((a, b) => b.l - a.l)

  return o
    .slice(0, o.length - 1)
    .every(
      (g, i) => g.l >= o[i + 1].l && g.w >= o[i + 1].w && g.h >= o[i + 1].h
    )
}


//TESTS
console.log(
  'true: ' +
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ])
)
console.log(
  'true: ' +
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])
)
console.log(
  'false: ' +
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ])
)
console.log(
  'false: ' +
    fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 }
    ])
)
console.log(
  'false: ' +
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 }
    ])
)
