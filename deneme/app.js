var numbers = [1, 2, 3, 4, 5, 6];
var kare = numbers.map((number) => number * number);
console.log(kare);

var filtre = numbers.filter((number) => !(number % 2));
console.log(filtre);

var topla = numbers.reduce((x, y) => x - y);
console.log(topla);

function withVar() {
  const b = () => a;
  var a = 24;
  return b;
}

function withLet() {
  const b = () => a;
  let a = 24;
  return b;
}

function changingValue() {
  let a = 24;
  const b = () => a;
  a = 42;
  return b;
}

console.log(withVar()()); // ??
console.log(withLet()()); // ??
console.log(changingValue()()); // ??

var obj = { w: 1, e: 2, r: 3 };
for (let a in obj) {
  console.log(a); //w e r
}

var numbers = [1, 2, 3, 4, 2, 5, 6];
for (b of numbers) {
  console.log(b);
}

const meyve = ["Elma", "Muz", "Kiraz"];

for (let i in meyve) {
  console.log(i, ":", meyve[i]);
}
