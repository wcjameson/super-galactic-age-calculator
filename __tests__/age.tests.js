/* eslint-disable no-undef */
import Age from "../src/age";

describe('Age', () => {

  test('should create an age object with two properties', () => {
    const age = new Age(45, 100);
    expect(age.personAge).toEqual(45);
    expect(age.lifeExpect).toEqual(100);
  });

  test('should return persons age in years on Mars', () => {
    const age = new Age(45, 100);
    expect(age.yoMercury(45, 100)).toEqual(10.8);
  });
});