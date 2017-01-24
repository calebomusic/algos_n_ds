// Given a list of people with their birth and death years, implement a method
// to compute the year with thte most number of people alive. You may asume
// that all people were born between 1990 and 2000 inclusive. If a person was alive during any portion
// of that year, they should be included in that year's count.

/* Sort. Then find maxYear. Note that according the problem if S dies at x,
S is still alive at x.

Alternativly, create a hash of years with their respective populations.
Add for birthYears. Decrease year + 1 for death years.
*/

const livingPeople = (people) => {
  const birthYears = births(people).sort();
  const deathYears = deaths(people).sort();

  const i = 0,
        j = 0,
        population = 0,
        maxPopulation,
        maxYear;

  while(i < birthYears.length) {
    if(birthYear[i] <= deathYears[j]) {
      population ++;

      if (maxPopulation < population) {
        maxPopulation = population;
        maxYear = birthYear[i];
      }

      i ++;
    } else if (birthYear[i] > deathYears[j]) {
      population --;
      j ++;
    }
  }

  return maxPopulation;
}
