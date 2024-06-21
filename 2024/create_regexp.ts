//kata url: https://www.codewars.com/kata/52e1476c8147a7547a000811/train/typescript

// assign your RegExp to REGEXP
export const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]){6,}$/;

const tests = [
    { 
        value: '123456',
        expected: false
    },
    { 
        value: '12345a',
        expected: false
    },
    { 
        value: '1234aA',
        expected: true
    },
    { 
        value: 'aaaa1A',
        expected: true
    },
    { 
        value: 'aaaa1A.',
        expected: false
    },
];

function execRegex(string: string) {
    return REGEXP.test(string);
}

function executeTests(testFn: (param: string) => boolean, tests: {value: string, expected: boolean}[]): boolean {
    const testsResult = tests.map((test) => {
        const testResultValue = testFn(test.value);
        const testResult = test.expected === testResultValue;
        const testMessage = testResult ? `TEST PASSED: Expected "${test.expected}" and got "${testResultValue}"` : `TEST FAILED: Expected "${test.expected}" and got "${testResultValue}"`;
        
        console.log(testMessage);
        
        return testResult;
    }).reduce((previousTestResult, currentTestResult) => previousTestResult && currentTestResult)
    
    const testsMessage = testsResult ? `ALL TESTS PASSED @${testFn.name}! CONGRATULATIONS!\n\n` : `ONE OR MORE TESTS FAILED @${testFn.name}, PLEASE TRY AGAIN!\n\n`;
    
    console.log(testsMessage);
    
    return testsResult;
}

executeTests(execRegex, tests);
