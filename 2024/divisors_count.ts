export function divisors(n: number) {
    let result = 0;
    for (let element = n; element >= 1; element--) {
        const isDivisor = (n % element) === 0;
        result = isDivisor ? ++result : result;
    }
    return result;
}

export function divisorsRecursive(n: number, current: number, result: number) {
    if(current > 0) {
        const isDivisor = (n % current) === 0;
        if (isDivisor) {
            return divisorsRecursive(n, --current, ++result)
        }
        return divisorsRecursive(n, --current, result)
    }
    return result;
}

const tests = [
    { 
        value: 1,
        expected: 1
    },
    { 
        value: 2,
        expected: 2
    },
    { 
        value: 4,
        expected: 3
    },
    { 
        value: 500000,
        expected: 42
    },
];

// maximum value for Recursive solution is 7826 due to stack size
const testsRecursive = [
    { 
        value: 1,
        expected: 1
    },
    { 
        value: 2,
        expected: 2
    },
    { 
        value: 4,
        expected: 3
    },
    { 
        value: 7826,
        expected: 16
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

function executeTestsRecursive(testFn: (n: number, current: number, result: number) => number, tests: {value: number, expected: number}[]): boolean {
    const testsResult = tests.map((test) => {
        const testResultValue = testFn(test.value, test.value, 0);
        const testResult = test.expected === testResultValue;
        const testMessage = testResult ? `TEST PASSED: Expected ${test.expected} and got ${testResultValue}` : `TEST FAILED: Expected ${test.expected} and got ${testResultValue}`;
        
        console.log(testMessage);
        
        return testResult;
    }).reduce((previousTestResult, currentTestResult) => previousTestResult && currentTestResult)
    
    const testsMessage = testsResult ? `ALL TESTS PASSED @${testFn.name}! CONGRATULATIONS!\n\n` : `ONE OR MORE TESTS FAILED @${testFn.name}, PLEASE TRY AGAIN!\n\n`;
    
    console.log(testsMessage);
    
    return testsResult;
}

executeTests(divisors, tests);
executeTestsRecursive(divisorsRecursive, testsRecursive);