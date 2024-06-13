//kata url: https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript

export function spinWords(words: string): string {
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
        const testMessage = testResult ? `TEST PASSED: Expected ${test.expected} and got ${testResultValue}` : `TEST FAILED: Expected ${test.expected} and got ${testResultValue}`;
        
        console.log(testMessage);
        
        return testResult;
    }).reduce((previousTestResult, currentTestResult) => previousTestResult && currentTestResult)
    
    const testsMessage = testsResult ? `ALL TESTS PASSED @${testFn.name}! CONGRATULATIONS!\n\n` : `ONE OR MORE TESTS FAILED @${testFn.name}, PLEASE TRY AGAIN!\n\n`;
    
    console.log(testsMessage);
    
    return testsResult;
}

executeTests(spinWords, tests);