//kata url: https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/typescript

const LOWERCASE_LETTERS: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  
const UPPERCASE_LETTERS: string[] = [
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export function rot13(str: string): string {
    
    const strSplitted = str.split('');
    let strCharCodes: number[] = [];
    strSplitted.map((value, index) => {
        const isCharLower = LOWERCASE_LETTERS.find((element) => element === value);
        const isCharUpper = UPPERCASE_LETTERS.find((element) => element === value);
        let charFind = '';
        if (isCharLower){
            // do isCharLower statements
        }

        if (isCharUpper){
            // do isCharUpper statements
        }
        strCharCodes.push();
        return;
    });

    // eventually use String.fromCharCode and string.charCodeAt();
    return 'ROT13 example.';
  }

const tests = [
    { 
        value: 'EBG13 rknzcyr.',
        expected: 'ROT13 example.'
    },
    { 
        value: 'This is my first ROT13 excercise!',
        expected: 'Guvf vf zl svefg EBG13 rkprepvfr!'
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

executeTests(rot13, tests);