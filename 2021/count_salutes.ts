export function countSalutes(hallway: String): number {
  let salutes = 0
  let lefties = 0
  for (const person of hallway) {
    if (person === '>') {
      lefties++
      continue
    }
    if (person === '<') {
      salutes += lefties*2
    }
  }
  return salutes
}
