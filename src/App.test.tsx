import {findCoinOutcomes} from './utils/helper/sampleSpace'


describe("check samplespace function", () => {
  test('for 2 coin result should be 4"', () => {
    expect(findCoinOutcomes(2)).toBe(4);
  });

  test('for 3 coin result should be 8"', () => {
    expect(findCoinOutcomes(3)).toBe(8);
  });

  test('for 4 coin result should be 8"', () => {
    expect(findCoinOutcomes(4)).toBe(16);
  });

});