export function solution(number: number): string {
  // convert the number to a roman numeral
  const romanNumeralsMap = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }
  return ''
}

/*
 * In Roman numerals 1990 is rendered:
 ** 1000=M,
 ** 900=CM,
 ** 90=XC; resulting in MCMXC.
 ** 2008 is written as 2000=MM, 8=VIII; or MMVIII
 ** 1666 uses each Roman symbol in descending order: MDCLXVI.
 */

/* Plan:
 *# map roman numerals
 *# calculate them
 *## calculate from I to III
 *## add 'IV' pattern
 *## refact 'IV' pattern to be used by 'X' as well
 *## refact 'IV' pattern to be used by 'C' but with 'L' as the subtractor instead of 'I' (make it an argument)
 *## refact 'IV' pattern to be used by 'X' but with 'D' as the subtractor instead of 'L' (pass D as the argument)
 */
