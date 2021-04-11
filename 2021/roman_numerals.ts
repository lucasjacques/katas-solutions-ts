export function solution(number: number): string {
  return fromDecimalToRoman(number)
}

function fromDecimalToRoman(decimal: number) {
  const romanNumeralsMap = [
    { roman: 'I', decimal: 1 },
    { roman: 'V', decimal: 5 },
    { roman: 'X', decimal: 10 },
    { roman: 'L', decimal: 50 },
    { roman: 'D', decimal: 500 },
    { roman: 'C', decimal: 100 },
    { roman: 'M', decimal: 1000 },
  ]

  const romanNumeralsMapSorted = romanNumeralsMap.sort((a, b) => {
    return b.decimal - a.decimal
  })

  let result: string = '',
    currentKey = 0,
    current = { element: romanNumeralsMapSorted[currentKey] }
  for (let remainder = decimal; remainder > 0; ) {
    if (remainder === 0) {
      break
    }
    if (remainder < current.element.decimal) {
      current.element = romanNumeralsMapSorted[++currentKey]
      continue
    }
    result += current.element.roman
    remainder -= current.element.decimal
  }
  return result
}
console.log('result: ', solution(5))

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
