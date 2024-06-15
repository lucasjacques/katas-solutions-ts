/*
 * String Template below
 */

export function templateString(template: string): string {
    const result = ''
    return result
}

const tests = [
    { 
        value: 'Hey fellow warriors',
        expected: 'Hey wollef sroirraw'
    },
    { 
        value: 'This is a test',
        expected: 'This is a test'
    },
    { 
        value: 'This is another test',
        expected: 'This is rehtona test'
    },
    { 
        value: 'hello world',
        expected: 'olleh dlrow'
    },
];

function executeTests(testFn: (param: string) => string, tests: {value: string, expected: string}[]): boolean {
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

executeTests(templateString, tests);


/*
 * Number Template below
 */

export function template2Number(n: number) {
    let result = 0;
    for (let element = n; element >= 1; element--) {
        const isDivisor = (n % element) === 0;
        result = isDivisor ? ++result : result;
    }
    return result;
}

const tests2 = [
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

function executeTests2(testFn: (param: number) => number, tests: {value: number, expected: number}[]): boolean {
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

executeTests2(template2Number, tests2);