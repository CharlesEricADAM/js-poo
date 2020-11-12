const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log(" 1 - Who are entrepreneurs who were born in the 70s ? ");
// Function filter need a function in callback, we use here an arrow function instead classic function
const res = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log("The entrepreneurs who were born in the 70s are : ");
res.forEach(entrepreneur => console.log(`${entrepreneur.first} ${entrepreneur.last} was born in ${entrepreneur.year}.`));
console.log("$".repeat(30));
// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("2 - Return an array of Full name for each entrepreneur :");
const arrayOfFullName = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
console.log(arrayOfFullName);

console.log("$".repeat(30));
// Quel âge aurait chaque inventeur aujourd'hui ?
console.log("3 - What age has all inventors today ?");
const ageOfInventors = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last} has ${2020 - entrepreneur.year} years old today`);
// Anomyn function in callback
ageOfInventors.forEach(function(inventor) {
  console.log(inventor);
})
console.log("$".repeat(30));
// Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("4 - Sorts entrepreneurs alphabetically by last name : ");
function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const lastA = a.last.toUpperCase();
  const lastB = b.last.toUpperCase();

  let comparison = 0;
  if (lastA > lastB) {
    comparison = 1;
  } else if (lastA < lastB) {
    comparison = -1;
  }
  return comparison;
}

console.log(entrepreneurs.sort(compare));
