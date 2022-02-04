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
      return mercuryYears + mercuryLifeExpect;
    }
  }

  yoVenus(personAge, lifeExpect) {
    let venusYears = Math.round(personAge * .62);
    let venusLifeExpect = Math.round(lifeExpect * .62);
    if (venusYears > venusLifeExpect) {
      return venusYears, (venusYears - venusLifeExpect);
    } else if (venusYears < venusLifeExpect) {
      return venusYears, (venusLifeExpect - venusYears);
    }
  }
}