export const solution = (number: number): string => {
  return fromDecimalToRoman(number)
}

const romanNumeralsMapSorted = [
  { roman: 'I', decimal: 1 },
  { roman: 'V', decimal: 5 },
  { roman: 'X', decimal: 10 },
  { roman: 'L', decimal: 50 },
  { roman: 'D', decimal: 500 },
  { roman: 'C', decimal: 100 },
  { roman: 'M', decimal: 1000 },
].sort((a, b) => {
  return b.decimal - a.decimal
})

const fromDecimalToRoman = (decimal: number) => {
  let result: string = ''
  const decimalAsString = decimal.toString().split('').reverse().join('')
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
  if (decimalUnit === 0) {
    return ''
  }
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
  if (i === 1) {
    for (
      let j = romanNumeralsMapSorted.length - 5,
        decimalUnitParsed = decimalUnit * 10;
      j <= romanNumeralsMapSorted.length - 3;
      j++
    ) {
      const current = romanNumeralsMapSorted[j]
      const subtractor =
        romanNumeralsMapSorted[romanNumeralsMapSorted.length - 3]
      if (decimalUnitParsed === current.decimal) {
        return current.roman
      }
      if (decimalUnitParsed === current.decimal - subtractor.decimal) {
        return `${subtractor.roman}${current.roman}`
      }
      if (decimalUnitParsed > current.decimal - subtractor.decimal) {
        let remainder = decimalUnitParsed - current.decimal
        let result = current.roman
        while (remainder > 0) {
          result += subtractor.roman
          remainder -= subtractor.decimal
        }
        return result
      }
    }
  }
  return ''
}
console.log('result for 1: ', solution(1))
console.log('result for 2: ', solution(2))
console.log('result for 3: ', solution(3))
console.log('result for 4: ', solution(4))
console.log('result for 5: ', solution(5))
console.log('result for 6: ', solution(6))
console.log('result for 7: ', solution(7))
console.log('result for 8: ', solution(8))
console.log('result for 9: ', solution(9))
console.log('result for 10: ', solution(10))
console.log('result for 20: ', solution(20))
console.log('result for 30: ', solution(30))
console.log('result for 40: ', solution(40))
console.log('result for 50: ', solution(50))
console.log('result for 60: ', solution(60))
console.log('result for 70: ', solution(70))
console.log('result for 80: ', solution(80))
console.log('result for 99: ', solution(99))

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
 *## transform correctly: 1 to 3 - check
 *## transform correctly: 'IV' case - check
 *## refactor 'IV' adaptation to be used by 'X' as well - check
 *## refactor 'IV' adaptation to be used by 'C' but with 'L' as the subtractor instead of 'I' (make it an argument) - check
 *## transform correctly: 1 to 99 - check
 *## refactor 'IV' adaptation to be used by 'X' but with 'D' as the subtractor instead of 'L' (pass D as the argument)
 *## transform correctly: 1 to 999
 *## transform correctly: 1 to 3999
 */
