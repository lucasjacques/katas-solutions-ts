/*
 * String Template below
 */
//kata url: https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/typescript

export function alphanumeric(string: string): boolean {
    //your code here
    return false;
  }

export function templateString(template: string): boolean {
    return true;
}

const tests = [
    { 
        value: 'Mazinkaiser',
        expected: true
    },
    { 
        value: '"hello world_',
        expected: false
    },
    { 
        value: '"PassW0rd',
        expected: true
    },
    { 
        value: '"     ',
        expected: false
    },
];

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

executeTests(templateString, tests);