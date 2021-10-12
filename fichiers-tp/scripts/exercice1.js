'use strict';

// une liste pour des tests
const numbers = [2, 3, 5, 4, 10, 6];
const css     = 'background: green; color: white; font-size: 15px;';
const css1     = 'background: blue; color: white;';


/********** EXERCICE 0 ***********************/
console.log(`%c *** EXERCICE 0 *** `, css);

/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;
// tests
console.log(`example(10) : ${example(10)}`);
console.log(`example(21) : ${example(21)}`);



/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );
// tests
console.log(`example2(numbers, 5) : ${example2(numbers, 5)}`);


/*********************************************/

/********** EXERCICE 1 ***********************/
console.log(`%c *** EXERCICE 1 *** `, css);
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }];

console.log(`%c *Q1* `, css1);
numbers.forEach((item) => {
  console.log(item);
});

console.log(`%c *Q2* `, css1);
console.log(`persons[1].name -> ${persons[1].name}`);

console.log(`%c *Q3* `, css1);
persons.forEach((item) => {
  console.log(`${item.name} a ${item.age} ans`);
});

console.log(`%c *Q4* `, css1);
const myForEach = (array,func) => {for(let i in array){func(array[i]);};}
console.log(`la fonction myForEach est bien implementée`);

console.log(`%c *Q5* `, css1);
console.log(`%c Q1 et Q3 avec myForEach`, css1+'background: red;');
console.log(`%c *Q5.1* `, css1+'background: red;');
myForEach(numbers, nb => console.log(nb));
console.log(`%c *Q5.2* `, css1+'background: red;');
myForEach(persons, item => console.log(`${item.name} a ${item.age} ans`));


/*********************************************/


/********** EXERCICE 2 ***********************/
console.log(`%c *** EXERCICE 2 *** `, css);
console.log(`%c *Q1* `, css1);
console.log(numbers.map(item => item*10));

console.log(`%c *Q2* `, css1);
const multiples = (n,l) => l.map(item => item*n);
console.log(multiples(10, numbers));

console.log(`%c *Q3* `, css1);
const multiples5 = l => multiples(5,l);
console.log(multiples5(numbers));

console.log(`%c *Q4* `, css1);
const multiplesFactory = factor => l => multiples(factor,l);
const multiples100 = multiplesFactory(100);
console.log(typeof(multiples100));
console.log(multiples100(numbers));


/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(`%c *** EXERCICE 3 *** `, css);
console.log(`%c *Q1* `, css1);
const capitalize = str => `${str.substring(0,1).toUpperCase()+str.substring(1)}`;
console.log(capitalize('timoleon'));

console.log(`%c *Q2* `, css1);
console.log(persons.map(item => item.name.toUpperCase()));

console.log(`%c *Q3* `, css1);
const myMap = (liste,func) => {
                                let result = [];
                                for(let elt of liste)
                                  result.push(func(elt));
                                console.log(result);
                              };
console.log(`la fonction myMap est bien implementée`);

console.log(`%c *Q4* `, css1);
myMap(persons, item => item.name.toUpperCase());

console.log(`%c *Q5* `, css1);
const myMap2 = (liste,func) => {
                                let result = [];
                                liste.forEach(item => result.push(func(item)));
                                console.log(result);
                              };
console.log(`la fonction myMap2 est bien implementée`);

console.log(`%c *Q6* `, css1);
myMap2(persons, item => item.name.toUpperCase());

/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(`%c *** EXERCICE 4 *** `, css);
console.log(`%c *Q1* `, css1);
console.log(`-`);

console.log(`%c *Q2* `, css1);
console.log(numbers.filter(item => item < 5));

console.log(`%c *Q3* `, css1);
const createAcronym = phrase => console.log(phrase.split(' ')
                                                  .filter(item => item.length>3)
                                                  .map(item => item.substring(0,1).toUpperCase())
                                                  .join(''));

createAcronym('formations en informatique de lille');
createAcronym('société nationale des chemins de fer français');


/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(`%c *** EXERCICE 5 *** `, css);
console.log(`%c *Q1* `, css1);
const mySome = (liste,func) => {
                                for(let elt of liste)
                                  if(func(elt))
                                    return true;
                                return false;
                              };
console.log(`la fonction mySome est bien implementée`);

console.log(`%c *Q2* `, css1);
console.log(`mySome nombre pair : ${mySome(numbers, item => item % 2 === 0)}`);
console.log(`mySome nombre négatif : ${mySome(numbers, item => item < 0)}`);
console.log(`some nombre pair : ${numbers.some(item => item % 2 === 0)}`);
console.log(`some nombre négatif : ${numbers.some(item => item < 0)}`);

console.log(`%c *Q3* `, css1);
const myEvery = (liste,func) => {
                                for(let elt of liste)
                                  if(!func(elt))
                                    return false;
                                return true;
                              };
console.log(`la fonction myEvery est bien implementée`);

console.log(`%c *Q4* `, css1);
console.log(`myEvery nombre pair : ${myEvery(numbers, item => item % 2 === 0)}`);
console.log(`myEvery nombre positif : ${myEvery(numbers, item => item > 0)}`);
console.log(`every nombre pair : ${numbers.every(item => item % 2 === 0)}`);
console.log(`every nombre positif : ${numbers.every(item => item > 0)}`);

console.log(`%c *Q5* `, css1);
const isSubArray = (array,liste) => console.log(array.every(item => liste.includes(item)));
isSubArray(numbers, [1, 10, 2, 7, 4, 6, 3, 5, 8]);
isSubArray(numbers, [1, 2, 7, 4, 6, 3, 8]);


/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(`%c *** EXERCICE 6 *** `, css);
console.log(`%c *Q1* `, css1);
const nbLetters = str => str.split(' ')
                            .reduce((previous, element) => previous.concat(element), [] )
                            .join('').length;
const FIL = "Formations en Informatique de Lille";
console.log(nbLetters(FIL));

console.log(`%c *Q2* `, css1);
const myReduce = (list, func, initialValue=0) => {
  for(let elt in list)
    initialValue = func(initialValue,list[elt]);
  return initialValue;
};
console.log(`la fonction myReduce est bien implementée`);

console.log(`%c *Q3* `, css1);
console.log(`myReduce : ${myReduce(numbers, (prev,next) => prev + next)}`);
console.log(`reduce : ${numbers.reduce((previous,element) => previous + element)}`);

console.log(`%c *Q4* `, css1);
const max = (x,y) => ( x>y ) ? x : y;
const maxNumber = num => num.reduce((prev,next) => max(prev,next));
console.log(maxNumber(numbers));

console.log(`%c *Q5* `, css1);
console.log(`Math.max : ${Math.max(3, 7, 4)}`);
console.log(`Math.max : ${Math.max(3, 7, 4, 12, 1)}`);

const maxNumber2 = num => Math.max(...num);
console.log(`maxNumber2 : ${maxNumber2([3, 7, 4])}`);
console.log(`maxNumber2 : ${maxNumber2([3, 7, 4, 12, 1])}`);

console.log(`%c *Q6* `, css1);
const sum = (num=0,...num1) => [num,...num1].reduce((prev,next)=> prev+next);
console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3,4,5));


/*********************************************/

/********** EXERCICE 7 ***********************/
console.log(`%c *** EXERCICE 7 *** `, css);
console.log(`%c *Q1* `, css1);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];
const participants = (invite, reponse) => [...invite.filter(item => !reponse.map(items => items.nom).includes(item)), ...reponse.filter(p => p.present === 'oui').map(dict=> dict.nom)]
console.log(participants(lesInvites, lesReponses));


/*********************************************/

/********** EXERCICE 8 ***********************/
console.log(`%c *** EXERCICE 8 *** `, css);

const myMap1 = new Map();
console.log(myMap1.has('a'));
console.log(myMap1.get('a'));
console.log(myMap1.set('a', 1));
console.log(myMap1.has('a'));
console.log(myMap1.get('a'));
console.log(myMap1.set('a', 3));
console.log(myMap1.get('a'));
console.log(myMap1.set('b', 2).set('c',10).set('d',0));
console.log([...myMap1.keys()]);

console.log(`%c *Q1* `, css1);
console.log(`la fonction occurrences est bien implementée`);

const occurrences = word => {
  let map = new Map();
  let dico = [...word].reduce((prev, next) => {prev[next] = (prev[next]+1 || 1); return prev},{})
  Object.keys(dico).forEach(key => map.set(key,dico[key]));
  return map;
}

console.log(`%c *Q2* `, css1);
[...occurrences('abracadabra').keys()].forEach(item => console.log(`${item} -> ${occurrences('abracadabra').get(item)}`));

/*********************************************/
