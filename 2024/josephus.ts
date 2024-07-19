//kata url: https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/typescript
export const josephus = <T>(items: T[], k: number): T[] => {
    let result: T[] = [];
    let remaining = items.concat([]);
    let kCounter = 1;
    
    for (let index = 0; index < remaining.length; index++) {
        let currentElement = remaining[index];
        // if the element being observed is the one to be removed, remove it
        if (k === kCounter) {
            let indexToRemove = remaining.findIndex((element)=> element === currentElement);
            remaining.splice(indexToRemove, 1);
            result = result.concat(currentElement);
            kCounter = 0;
            index--;
        }
        // if the index being observed is the last one of the remaining array, start it over from the first value of the remaining array
        if (index+1 === remaining.length){
            // if the remaining items is empty, end the for loop
            if (remaining.length === 0) {
                break;
            }
            // due to for incrementation, it's required to make index negative
            index = -1;
        }
        kCounter++;
    }
    
    return result;
};

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

type JosephusTest<T> = {
    values: [T[], number],
    expected: T[]
}



const tests: JosephusTest<Object>[] = [
    {
        values: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1],
        expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        values: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2],
        expected: [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
    },
    { 
        values: [["C","o","d","e","W","a","r","s"], 4],
        expected: ['e', 's', 'W', 'o', 'C', 'd', 'r', 'a']
    }
];

function executeTests(testFn: <T>(param1: T[], param2: number) => T[], tests: JosephusTest<Object>[]): boolean {
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