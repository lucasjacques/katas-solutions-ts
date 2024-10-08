//kata url: https://www.codewars.com/kata/5508249a98b3234f420000fb/train/typescript
export const movingShift = (s:string, shift:number): string []=> {
    // Helper function to shift a single character with a dynamic shift value
    const shiftChar = (char: string, shift2: number): string => {
        const charCode = char.charCodeAt(0);

        // Check if it's an uppercase letter
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 + shift2++) % 26) + 65);
        }

        // Check if it's a lowercase letter
        if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 + shift2++) % 26) + 97);
        }

        // If it's not a letter, don't change it
        shift2++;
        return char;
    };

    // Apply the cipher with an incremental shift to the whole string
    let currentShift = shift;
    const cipheredText = s.split('').map(char => {
        const shiftedChar = shiftChar(char, currentShift);
        currentShift++;
        return shiftedChar;
    }).join('');

    const messageLength = cipheredText.length;

    // Calculate base length and remaining
    const baseLength = Math.ceil(messageLength / 5);
    const remaining = messageLength - baseLength * 4;

    // Create an array to hold the lengths of each part
    const partsLengths = new Array(4).fill(baseLength)
    // Add last array with remaining chars
    partsLengths.push(new Array(1).fill(remaining))

    // Split the ciphered message based on the calculated lengths using substring
    const result: string[]= [];
    let index = 0;
    for (let length of partsLengths) {
        result.push(cipheredText.substring(index, index + length));
        index += length;
    }

    return result;
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