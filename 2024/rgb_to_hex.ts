//kata url: https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript
export function rgbToHex(r: number, g: number, b: number): string {
    let result = '';
    return result;
}

type rgbToHexTest = {
    values: [number, number, number],
    expected: string
}

const tests2: rgbToHexTest[] = [
    {
        values: [0,0,0],
        expected: ''
    }
    // { 
    //     values: [0, 0, 0],
    //     expected: "000000"
    // },
    // { 
    //     values: [0, 0, -20],
    //     expected: "000000"
    // },
    // { 
    //     values: [300, 255, 255],
    //     expected: "FFFFFF"
    // },
    // { 
    //     values: [173, 255, 47],
    //     expected: "ADFF2F"
    // },
];

function executeTests2(testFn: (param1: number,param2: number,param3: number) => string, tests: rgbToHexTest[]): boolean {
    const testsResult = tests.map((test) => {
        const testResultValue = testFn(...test.values);
        const testResult = test.expected === testResultValue;
        const testMessage = testResult ? `TEST PASSED: Expected ${test.expected} and got ${testResultValue}` : `TEST FAILED: Expected ${test.expected} and got ${testResultValue}`;
        
        console.log(testMessage);
        
        return testResult;
    }).reduce((previousTestResult, currentTestResult) => previousTestResult && currentTestResult)
    
    const testsMessage = testsResult ? `ALL TESTS PASSED @${testFn.name}! CONGRATULATIONS!\n\n` : `ONE OR MORE TESTS FAILED @${testFn.name}, PLEASE TRY AGAIN!\n\n`;
    
    console.log(testsMessage);
    
    return testsResult;
}

executeTests2(rgbToHex, tests2);