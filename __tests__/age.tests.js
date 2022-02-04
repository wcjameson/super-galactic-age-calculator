

describe('Age', () => {

  test('should create an age object with two properties', () => {
    const age = new Age(45, 100);
    expect(age.personAge).toEqual(45);
    expect(age.lifeExpect).toEqual(100);
  });
});