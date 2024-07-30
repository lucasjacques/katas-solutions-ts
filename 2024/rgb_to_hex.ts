//kata url: https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript
export function rgbToHex(r: number, g: number, b: number): string {
    const rgb = [r,g,b]
    const [rTreated, gTreated, bTreated] = rgb.map((dec: number): number => { 
        if (dec < 0){
            return 0
        }
        if (dec > 255) {
            return 255
        }
        return dec
    });
    const decimalToHex = (dec: number): string => dec.toString(16).toUpperCase();
    const hexToDoubleDigits = (hex: string): string => hex.length === 1 ? `0${hex}` : hex;
    const rHexed: string = decimalToHex(rTreated);
    const gHexed: string = decimalToHex(gTreated);
    const bHexed: string = decimalToHex(bTreated);
    const rResult: string = hexToDoubleDigits(rHexed);
    const gResult: string = hexToDoubleDigits(gHexed);
    const bResult: string = hexToDoubleDigits(bHexed);
    return `${rResult}${gResult}${bResult}`;
}

type rgbToHexTest = {
    values: [number, number, number],
    expected: string
}

const tests2: rgbToHexTest[] = [
    { 
        values: [0, 0, 0],
        expected: "000000"
    },
    { 
        values: [0, 0, -20],
        expected: "000000"
    },
    { 
        values: [300, 255, 255],
        expected: "FFFFFF"
    },
    { 
        values: [173, 255, 47],
        expected: "ADFF2F"
    },
    { 
        values: [148, 0, 211],
        expected: "9400D3"
    },
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