//kata url: https://www.codewars.com/kata/5508249a98b3234f420000fb/train/typescript
export const movingShift = (s:string, shift:number): string []=> {
  return []
}

// will work in this function later
// export const demovingShift = (arr:string[], shift:number): string [] => {
//   return []
// }

type Test = {
    values: [string, number];
    expected: string [];
}

const tests: Test[] = [
    { 
        values: ['I should have known that you would have a perfect answer for me!!!', 1],
        expected: ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
    },
];

const compareArrays = <T>(array1: T[], array2: T[]): boolean => {
    if (array1.length != array2.length) {
        return false;
    }

    for (let index = 0; index < array1.length; index++) {
        if (array1[index] != array2[index]) {
            return false;
        }
    }

    return true;
}

function executeTests(testFn: (param: string, param2: number) => string[], tests: {values: [string, number], expected: string[]}[]): boolean {
    const testsResult = tests.map((test) => {
        const testResultValue = testFn(test.values[0], test.values[1]);
        const testResult = compareArrays(test.expected, testResultValue);
        const testMessage = testResult ? `TEST PASSED: Expected "${test.expected}" and got "${testResultValue}"` : `TEST FAILED: Expected "${test.expected}" and got "${testResultValue}"`;
        
        console.log(testMessage);
        
        return testResult;
    }).reduce((previousTestResult, currentTestResult) => previousTestResult && currentTestResult)
    
    const testsMessage = testsResult ? `ALL TESTS PASSED @${testFn.name}! CONGRATULATIONS!\n\n` : `ONE OR MORE TESTS FAILED @${testFn.name}, PLEASE TRY AGAIN!\n\n`;
    
    console.log(testsMessage);
    
    return testsResult;
}

executeTests(movingShift, tests);