export function evenOrOdd(n:number):string {
  return n % 2 ? "Odd" : "Even";
}

// the previous one was a little confusing
export function evenOrOddBetter(n:number):string {
    return n % 2 === 0 ? "Even" : "Odd";
  }

const tests = [
    { 
        value: 1,
        expected: 'Odd'
    },
];

for (let index = 0; index < 20; index++) {
    const divideTestsInHalf = Math.floor(Math.random()*2) === 0;
    if (divideTestsInHalf) {
        const elementEven = Math.floor(Math.random()*10 ) * Math.floor( Math.random()*10 ) * 2;
        tests.push({
            value: elementEven,
            expected: 'Even'
        });
        continue;
    }
    const elementOdd = Math.floor(Math.random()*10 ) * Math.floor( Math.random()*10 ) * 2 + 1;
    tests.push({
        value: elementOdd,
        expected: 'Odd'
    });   
}

console.log(`evenOrOdd: ${tests.map((test) => test.expected === evenOrOdd(test.value))}`);
console.log(`evenOrOddBetter: ${tests.map((test) => test.expected === evenOrOddBetter(test.value))}`);