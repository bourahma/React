const numberFormatter = new Intl.NumberFormat();

dataPays.forEach( pays => pays.toString = function() { return `${this.nom} : ${this.population} hab., ${this.superficie}km², ${this.PIB} milliards (US $)` } );
const css     = 'background: purple; color: white; font-size: 15px;';

/****  QUESTION 1 *****/
console.log('%c *** QUESTION 1 ***', css);
console.log('il ajoutera une nouvelle méthode aux dataPays qui va imprimer les données telles que nom, population, superficie, PIB.');

/****  QUESTION 2 *****/
console.log('%c *** QUESTION 2 ***', css);

const populationTotale = dataPays.reduce((prev,next)=> prev+next.population,0);
console.log(`population totale : ${numberFormatter.format(populationTotale)}`);
/*
let totale = 0;
for(let pays of dataPays){
  totale+= pays.population;
}
console.log(totale);
*/

/***********************/


/****  QUESTION 3 *****/
console.log('%c *** QUESTION 3 ***', css);
const findData = str => dataPays.find((item)=> str == item.nom);
try {
  console.log(findData('France').toString());
  console.log(findData('Test').toString());
}
catch(error) {
  console.log(undefined);
}

/***********************/


/****  QUESTION 4 *****/
console.log('%c *** QUESTION 4 ***', css);
const dixpluspeuples = dataPays.sort((a,b)=> b.population - a.population).slice(0,10).reduce((prev, next,index) =>prev+`\n ${index+1}. `+next,'');

console.log(`10 plus peuplés : \n${dixpluspeuples}`);

/***********************/


/****  QUESTION 5 *****/
console.log('%c *** QUESTION 5 ***', css);
dataPays.forEach(item => item.densite = item.population/item.superficie);

const densitesup1000 = () => dataPays.filter( article => article.densite > 1000 )
                                     .sort((a,b) => b.densite - a.densite)
                                     .forEach( (item,index) => console.log(`${index+1}. ${item.nom} : ${item.densite.toFixed(2)} hab/km²`));

densitesup1000();

/***********************/


/****  QUESTION 6 *****/
console.log('%c *** QUESTION 6 ***', css);
const nombrehabitants = () => dataPays.filter(item => (item.PIB*1000000000/item.population) < 10000)
                                      .reduce((prev, next) => prev+next.population, 0);
console.log(numberFormatter.format(nombrehabitants()));

/***********************/
