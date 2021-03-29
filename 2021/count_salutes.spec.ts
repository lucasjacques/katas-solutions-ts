import { countSalutes } from './count_salutes';
const { assert } = require('chai');

describe('Solution test', () => {
  const act = (hallway: String, expected: number) => {
    const actual: number = countSalutes(hallway);
    const input: String = hallway;
    it(`input: ${input} expected: ${expected} actual: ${actual}`,
       () => assert.strictEqual(actual, expected));
  }
  describe('Fixed tests', () => {
    act('<---->---<---<-->', 4);
    act('------', 0);
    act('>>>>>>>>>>>>>>>>>>>>>----<->', 42);
    act('<<----<>---<', 2);
    act('>', 0);
  });
});