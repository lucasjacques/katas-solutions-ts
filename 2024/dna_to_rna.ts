export function DNAtoRNA(dna: string): string {
    return dna.split('T').join('U');
}

export function DNAtoRNARaw(dna: string): string {
    const resultArray: string[] = [];
    for (let index = 0; index < dna.length; index++) {
        dna[index] === 'T' ? resultArray.push('U') : resultArray.push(dna[index]);
    }

    let result: string = '';
    for (let index = 0; index < resultArray.length; index++) {
        result += resultArray[index];
    }

    return result;
}

export function DNAtoRNABetter(dna: string): string {
    return dna.replace(/T/g, 'U');
}


const tests = [
    { 
        value: 'GCAT',
        expected: 'GCAU'
    },
    { 
        value: 'TTTT',
        expected: 'UUUU'
    },
    { 
        value: 'GACCGCCGCC',
        expected: 'GACCGCCGCC'
    },
    { 
        value: 'TTTGCGCTTTGC',
        expected: 'UUUGCGCUUUGC'
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

executeTests(DNAtoRNA, tests);
executeTests(DNAtoRNARaw, tests);
executeTests(DNAtoRNABetter, tests);