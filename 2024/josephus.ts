//kata url: https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/typescript
export const josephus = <T>(items: T[], k: number): T[] => {
    let result: T[] = [];
    let remaining = items;
    let countItems = items.length;
    let remaining2 = items;
    while (remaining.length > 1) {
        
        for (let index = k-1; index < countItems; index=index+k) {
            console.log(`Current item being removed: ${remaining[index]}, ${index+1}`);
            console.log(`Current state of remaining array: ${remaining}`);
            console.log(`Current state of remaining2 array: ${remaining2}`);
            console.log(`Current concat being done: ${result.concat([remaining[index]])}`);
            console.log(`------------------------------`);
            result = result.concat([remaining[index]]);
            remaining2 = remaining.splice(index);
        }
        remaining = remaining2;
    }
    compareArrays(items, result);
    return result;
};

type JosephusTest<T> = {
    values: [T[], number],
    expected: T[]
}

const tests: JosephusTest<Object>[] = [
  { 
      values: [[1,2,3,4,5,6,7,8,9,10],1],
      expected: [1,2,3,4,5,6,7,8,9,10]
  },
  { 
        values: [[1,2,3,4,5,6,7,8,9,10],2],
        expected: [2,4,6,8,10,3,7,1,9,5]
    },
];

const compareArrays = <T>(array1: T[], array2: T[]): boolean => {
    if (array1.length != array2.length){
        return false;
    }

    for (let index = 0; index < array1.length; index++) {
        if (array1[index] != array2[index]){
            return false;
        }
    }

    return true;
}

function executeTests(testFn: <T>(param1: T[], param2: number ) => T[], tests: JosephusTest<Object>[]): boolean {
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

executeTests(josephus, tests);