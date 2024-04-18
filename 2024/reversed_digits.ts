export const digitize = (n: number): number[] => {
  const nStringed = n.toString();
  const result: Array<number> = [];
  for (let index = nStringed.length - 1; index >= 0; index--) {
    const element:number = +nStringed[index];
    result.push(element);
  }
  return result;
}
console.log(`Digitize: `, digitize(142399));

// another solution found! Using map() and reverse()
export const digitizeBetter = (n: number): number[] => {
    const nStringed = n.toString();
    const result: Array<number> = [];
    nStringed.split('').reverse().map((value)  => {
        const element:number = +value;
        result.push(element);
    });
    return result;
}

console.log(`DigitizeBetter: `, digitizeBetter(142399));

// another solution found! Using spread operator (...) using
// previous map() and reverse() as well
export const digitizeEvenBetter = (n: number): number[] => {
    const nStringed = n.toString();
    const result: Array<number> = [...nStringed].map(
        (value) => +value
    ).reverse();
    return result;
}

console.log(`DigitizeEvenBetter: `, digitizeEvenBetter(142399));