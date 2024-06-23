//kata url: TEMPLATE

export const digitalRoot = (n:number): number => {
    let nStringified = '' + n;
    let result = 0;
    for (let i = 0; i < nStringified.length; i++) {
        result += parseInt(nStringified[i]);
    }
    console.log(`result:${result}`);
    return result;
  };

const invertCharacters = (s: string): string => {
    const splitted = s.split('');
    let  result = ''
    for (let index = splitted.length-1; index >= 0; index--) {
        result += splitted[index];
        console.log(`i:${index}, element: ${splitted[index]}`);
    }
    console.log(`result:${result}`);
    return '';
}

const tests2 = [
    { 
        value: 16,
        expected: 7
    },
    { 
        value: 100,
        expected: 1
    },
];

function executeTests(testFn: (param: number) => number, tests: {value: number, expected: number}[]): boolean {
    const testsResult = tests.map((test) => {
        const testResultValue = testFn(test.value);
        const testResult = test.expected === testResultValue;
        const testMessage = testResult ? `TEST PASSED: Expected ${test.expected} and got ${testResultValue}` : `TEST FAILED: Expected ${test.expected} and got ${testResultValue}`;
        
        console.log(testMessage);
        
        return testResult;
    }).reduce((previousTestResult, currentTestResult) => previousTestResult && currentTestResult)
    
    const testsMessage = testsResult ? `ALL TESTS PASSED @${testFn.name}! CONGRATULATIONS!\n\n` : `ONE OR MORE TESTS FAILED @${testFn.name}, PLEASE TRY AGAIN!\n\n`;
    
    console.log(testsMessage);
    
    return testsResult;
}

executeTests(digitalRoot, tests2);