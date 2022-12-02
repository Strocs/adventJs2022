const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

function countHours(year, holidays) {
  return holidays.flatMap(day => {
    const weekDay = new Date(`${day}/${year}`).getDay()
    if (weekDay === 0 || weekDay === 6) return []
    return weekDay
  }).length * 2
}

const extraHours = countHours(year, holidays) // 2 días -> 4 horas extra en el año

console.log(extraHours)