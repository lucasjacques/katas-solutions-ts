//kata url: https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript

export const digitalRoot = (n:number): number => {
    let nStringified = n.toString();
    let result = 0;
    while (nStringified.length > 1){
        result = 0;
        for (let i = 0; i < nStringified.length; i++) {
            result += parseInt(nStringified[i]);
        }
        nStringified = result.toString();
    }
    return result;
  };


export const digitalRootRecursive = (n:number): number => {
    let nStringified = n.toString();
    if (nStringified.length > 1){
        let result = 0;
        for (let i = 0; i < nStringified.length; i++) {
            result += parseInt(nStringified[i]);
        }
        return digitalRootRecursive(result);
    }
    return n;
  };

const tests = [
    { 
        value: 16,
        expected: 7
    },
    { 
        value: 942,
        expected: 6
    },
    { 
        value: 132189,
        expected: 6
    },
    { 
        value: 493193,
        expected: 2
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

executeTests(digitalRoot, tests);
executeTests(digitalRootRecursive, tests);