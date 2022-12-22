const gifts = ['cat', 'game', 'socks']

function wrapping(gifts) {
  return gifts.map(g => {
    const lr = '*'.repeat(g.length + 2)
    return `${lr}\n${`*${g}*`}\n${lr}`
    }
  )
}

console.log(wrapping(gifts)[2])