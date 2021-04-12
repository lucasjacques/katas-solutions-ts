export const solution = (number: number): string => {
  return fromDecimalToRoman(number)
}

let romanNumeralsMapSorted: any
const fromDecimalToRoman = (decimal: number) => {
  const romanNumeralsMap = [
    { roman: 'I', decimal: 1 },
    { roman: 'V', decimal: 5 },
    { roman: 'X', decimal: 10 },
    { roman: 'L', decimal: 50 },
    { roman: 'D', decimal: 500 },
    { roman: 'C', decimal: 100 },
    { roman: 'M', decimal: 1000 },
  ]

  romanNumeralsMapSorted = romanNumeralsMap.sort((a, b) => {
    return b.decimal - a.decimal
  })

  let result: string = ''
  const decimalAsString = decimal.toString()
  for (let i = 0; i < decimalAsString.length; i++) {
    const element = parseInt(decimalAsString[i])
    result = transformDecimalUnitToRoman(element, i) + result
  }
  return result
}

const transformDecimalUnitToRoman = (
  decimalUnit: number,
  i: number
): string => {
  if (i === 0) {
    for (
      let j = romanNumeralsMapSorted.length - 3;
      j <= romanNumeralsMapSorted.length - 1;
      j++
    ) {
      const current = romanNumeralsMapSorted[j]
      const subtractor =
        romanNumeralsMapSorted[romanNumeralsMapSorted.length - 1]
      if (decimalUnit === current.decimal) {
        return current.roman
      }
      if (decimalUnit === current.decimal - subtractor.decimal) {
        return `${subtractor.roman}${current.roman}`
      }
      if (decimalUnit > current.decimal - subtractor.decimal) {
        let remainder = decimalUnit - current.decimal
        let result = current.roman
        while (remainder > 0) {
          result += subtractor.roman
          remainder--
        }
        return result
      }
    }
  }
  return ''
}
console.log('result: ', solution(1))
console.log('result: ', solution(2))
console.log('result: ', solution(3))
console.log('result: ', solution(4))
console.log('result: ', solution(5))
console.log('result: ', solution(6))
console.log('result: ', solution(7))
console.log('result: ', solution(8))
console.log('result: ', solution(9))

/* Some infos:
 * In Roman numerals 1990 is rendered:
 ** 1000=M,
 ** 900=CM,
 ** 90=XC; resulting in MCMXC.
 ** 2008 is written as 2000=MM, 8=VIII; or MMVIII
 ** 1666 uses each Roman symbol in descending order: MDCLXVI.
 */

/* Dev plan:
 *# map roman numerals - check
 *# transform from Decimal to Roman
 *## transform correctly: I to III - check
 *## transform correctly: 'IV' case
 *## refactor 'IV' adaptation to be used by 'X' as well
 *## refactor 'IV' adaptation to be used by 'C' but with 'L' as the subtractor instead of 'I' (make it an argument)
 *## refactor 'IV' adaptation to be used by 'X' but with 'D' as the subtractor instead of 'L' (pass D as the argument)
 */
