/*
 * String Template below
 */
//kata url: https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/typescript

export function alphanumeric(string: string): boolean {
    /* 
     * regex explained:
     * / - regex start
     ** ^ - detect start (to detect the start of the word to be filtered)
     ** ( - group start
     *** [ - match group
     **** A-Za-z\d - all the characters to be permited: A to Z, a to z, digits
     *** ] - match group
     ** ) - group end
     ** + - one or more
     ** $ - detect end (to detect the end of the word to be filtered)
     * / - regex end
     */
    
    const regex = /^([A-Za-z\d])+$/;
    return string.match(regex) !== null
}

export function alphanumeric_improved(string: string): boolean {
    /* 
     * regex explained:
     * / - regex start
     ** ^ - detect start (to detect the start of the word to be filtered)
     *- ( - group start - removed this group, it is unecessary
     *** [ - match group
     **** A-Za-z\d - all the characters to be permited: A to Z, a to z, digits
     *** ] - match group
     ** ) - group end - removed this group, it is unecessary
     ** + - one or more
     ** $ - detect end (to detect the end of the word to be filtered)
     * / - regex end
     */
    
    const regex = /^[A-Za-z\d]+$/;
    return regex.test(string);
}

const tests = [
    { 
        value: 'Mazinkaiser',
        expected: true
    },
    { 
        value: 'hello world_',
        expected: false
    },
    { 
        value: 'PassW0rd',
        expected: true
    },
    { 
        value: '     ',
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

executeTests(alphanumeric, tests);
executeTests(alphanumeric_improved, tests);