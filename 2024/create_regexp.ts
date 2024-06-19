//kata url: https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript

// assign your RegExp to REGEXP
export const REGEXP = /(\d|[A-Z]|[a-z]){6}/;

// const tests = [
//     { 
//         value: '123456',
//         expected: 'Hey wollef sroirraw'
//     },
//     { 
//         value: 'a',
//         expected: 'This is a test'
//     },
//     { 
//         value: 'A',
//         expected: 'This is rehtona test'
//     },
//     { 
//         value: '1',
//         expected: 'olleh dlrow'
//     },
//     { 
//         value: '_',
//         expected: 'false'
//     },
// ];

// function executeTests(testFn: (param: string) => string, tests: {value: string, expected: string}[]): boolean {
//     const testsResult = tests.map((test) => {
//         const testResultValue = testFn(test.value);
//         const testResult = test.expected === testResultValue;
//         const testMessage = testResult ? `TEST PASSED: Expected "${test.expected}" and got "${testResultValue}"` : `TEST FAILED: Expected "${test.expected}" and got "${testResultValue}"`;
        
//         console.log(testMessage);
        
//         return testResult;
//     }).reduce((previousTestResult, currentTestResult) => previousTestResult && currentTestResult)
    
//     const testsMessage = testsResult ? `ALL TESTS PASSED @${testFn.name}! CONGRATULATIONS!\n\n` : `ONE OR MORE TESTS FAILED @${testFn.name}, PLEASE TRY AGAIN!\n\n`;
    
//     console.log(testsMessage);
    
//     return testsResult;
// }

// executeTests(, tests);
