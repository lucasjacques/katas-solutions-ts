//kata url: https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/typescript
export const josephus = <T>(items: T[], k: number): T[] => {
    let result = items;
    while (items.length > 1){
        for (let index = k-1; index < result.length; index+=index+k) {
            const element = result[index];
            console.log(`element: ${element}`)
        }
    }
    return [];
};

type JosephusTest<T> = {
    values: [T[], number],
    expected: T[]
}

const tests: JosephusTest<number>[] = [
  { 
      values: [[1,2,3,4,5,6,7,8,9,10],1],
      expected: [1,2,3,4,5,6,7,8,9,10]
  },
];

function executeTests(testFn: <T>(param1: T[], param2: number ) => T[], tests: number): boolean {
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

executeTests(josephus, tests);