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
  if (i === 2) {
    for (
      let j = romanNumeralsMapSorted.length - 6,
        decimalUnitParsed = decimalUnit * 10;
      j <= romanNumeralsMapSorted.length - 5;
      j++
    ) {
      const current = romanNumeralsMapSorted[j]
      const subtractor =
        romanNumeralsMapSorted[romanNumeralsMapSorted.length - 5]
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
  if (i === 3) {
    if (decimalUnit > 3) {
      throw new Error("Can't calculate number. Reason: too big")
    }
    const romanNumeral = romanNumeralsMapSorted[0].roman
    let decimalUnitCounter = decimalUnit
    let result = ''
    while (decimalUnitCounter > 0) {
      result += romanNumeral
      decimalUnitCounter--
    }
    return result
  }
  // Next dev plan
  // just a one character only
  // if(decimal = 1) { return 'M'}
  // if(decimal = 2) { return 'MM'}
  // if(decimal = 3) { return 'MMM'}
  // let remainder = decimalUnit - current.decimal
  // let result = current.roman
  // while (remainder > 0) {
  //   result += subtractor.roman
  //   remainder--
  // }
  // return result

  return ''
}
console.log('result for 111: ', solution(111))
console.log('result for 112: ', solution(112))
console.log('result for 113: ', solution(113))
console.log('result for 114: ', solution(114))
console.log('result for 115: ', solution(115))
console.log('result for 116: ', solution(116))
console.log('result for 117: ', solution(117))
console.log('result for 118: ', solution(118))
console.log('result for 119: ', solution(191))
console.log('result for 110: ', solution(110))
console.log('result for 120: ', solution(120))
console.log('result for 130: ', solution(130))
console.log('result for 140: ', solution(140))
console.log('result for 150: ', solution(150))
console.log('result for 160: ', solution(160))
console.log('result for 170: ', solution(170))
console.log('result for 180: ', solution(180))
console.log('result for 199: ', solution(199))
console.log('result for 100: ', solution(100))
console.log('result for 1000: ', solution(1000))
console.log('result for 2000: ', solution(2000))
console.log('result for 3000: ', solution(3000))
console.log('result for 3559: ', solution(3559))

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
 *## refactor 'IV' adaptation to be used by 'X' but with 'D' as the subtractor instead of 'L' (pass D as the argument) - check
 *## transform correctly: 1 to 999 - check
 *## transform correctly: 1 to 3999 - check
 */
