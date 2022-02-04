export default class Age {
  constructor(personAge, lifeExpect) {
    this.personAge = personAge;
    this.lifeExpect = lifeExpect;
  }

  yoMercury(personAge, lifeExpect) {
    let mercuryYears = Math.round(personAge * .24);
    let mercuryLifeExpect = Math.round(lifeExpect * .24);
    if (mercuryYears > mercuryLifeExpect) {
      return mercuryYears, (mercuryYears - mercuryLifeExpect);
    } else if (mercuryYears < mercuryLifeExpect) {
      return mercuryYears,  (mercuryLifeExpect - mercuryYears);
    } else {
      return mercuryYears, lifeExpect;
    }
  }

  yoVenus(personAge, lifeExpect) {
    let venusYears = Math.round(personAge * .62);
    return venusYears;
  }
}