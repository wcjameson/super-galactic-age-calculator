/* eslint-disable no-undef */
import Age from "../src/age";

describe('Age', () => {

  test('should create an age object with two properties', () => {
    const age = new Age(45, 100);
    expect(age.personAge).toEqual(45);
    expect(age.lifeExpect).toEqual(100);
  });

  test('should return persons age in Mercury years', () => {
    const age = new Age(40, 85);
    expect(age.yoMercury(40, 85)).toEqual(10);
  });

  test('should return persons years over life expectancy in Mercury years', () => {
    const age = new Age(100, 45);
    expect(age.yoMercury(100, 45)).toEqual(13);
  });

  test('should return years left to live in Mercury years', () => {
    const age = new Age(40, 90);
    expect(age.yoMercury(40, 90)).toEqual(12);
  });

  test('should return persons life expectancy in Mercury years', () => {
    const age = new Age(85, 85);
    expect(age.yoMercury(85, 85)).toEqual(20);
  });

  test('should return person age in Venus years', () => {
    const age = new Age(40, 85);
    expect(age.yoVenus(40, 85)).toEqual(28);
  });

  test('should return persons years over life expectancy in Venus years', () => {
    const age = new Age(100, 45);
    expect(age.yoVenus(100, 45)).toEqual(34);
  });

  test('should return years left to live in Venus years', () => {
    const age = new Age(40, 90);
    expect(age.yoVenus(40, 90)).toEqual(31);
  });

  test('should return persons life expectancy in Venus years', () => {
    const age = new Age(85, 85);
    expect(age.yoVenus(85, 85)).toEqual(53);
  });
});