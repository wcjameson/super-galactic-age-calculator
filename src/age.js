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
      return mercuryYears & mercuryLifeExpect;
    }
  }

  yoVenus(personAge, lifeExpect) {
    let venusYears = Math.round(personAge * .62);
    let venusLifeExpect = Math.round(lifeExpect * .62);
    if (venusYears > venusLifeExpect) {
      return venusYears, (venusYears - venusLifeExpect);
    } else if (venusYears < venusLifeExpect) {
      return venusYears, (venusLifeExpect - venusYears);
    } else {
      return venusYears & venusLifeExpect;
    }
  }

  yoMars(personAge, lifeExpect) {
    let marsYears = Math.round(personAge * 1.88);
    let marsLifeExpect = Math.round(lifeExpect * 1.88);
    if(marsYears > marsLifeExpect) {
      return marsYears, (marsYears - marsLifeExpect);
    } else if (marsYears < marsLifeExpect) {
      return marsYears, (marsLifeExpect - marsYears);
    } else {
      return marsYears & marsLifeExpect;
    }
  }

  yoJupiter(personAge, lifeExpect) {
    let jupiterYears = Math.round(personAge * 11.86);
    let jupiterLifeExpect = Math.round(lifeExpect * 11.86);
    if(jupiterYears > jupiterLifeExpect) {
      return jupiterYears, (jupiterYears - jupiterLifeExpect);
    } else if (jupiterYears < jupiterLifeExpect) {
      return jupiterYears, (jupiterLifeExpect - jupiterYears);
    } else {
      return jupiterYears & jupiterLifeExpect;
    }
  }
}